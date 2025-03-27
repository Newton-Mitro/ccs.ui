// src/shared/utils/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Your API base URL
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor: Attach Access Token to Request Headers
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Token Expiry & Refresh Access Token
axiosInstance.interceptors.response.use(
  (response) => response, // Success response, return the data
  async (error) => {
    const originalRequest = error.config;

    // Check for token expiry error (401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite loops

      try {
        // Get the refresh token from localStorage
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Call the API to refresh the access token
        const refreshResponse = await axios.post(
          "https://api.example.com/refresh-token", // Your token refresh API endpoint
          { refreshToken }
        );

        const newAccessToken = refreshResponse.data.accessToken;
        if (newAccessToken) {
          // Update the access token in localStorage
          localStorage.setItem("accessToken", newAccessToken);

          // Retry the original request with the new access token
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } else {
          throw new Error("Failed to refresh access token");
        }
      } catch (refreshError) {
        console.error("Token refresh failed, logging out user.");
        // Perform logout logic (e.g., clear session)
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Redirect to login page
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
