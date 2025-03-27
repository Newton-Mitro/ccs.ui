// src/modules/auth/infrastructure/AuthRepository.ts
import axiosInstance from "../../../shared/utils/axiosInstance";

export class AuthRepository {
  // Function to login and get tokens
  async login(email: string, password: string) {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data; // Assuming this returns { accessToken, refreshToken }
  }

  // Function to register a new user
  async register(email: string, password: string, username: string) {
    const response = await axiosInstance.post("/auth/register", {
      email,
      password,
      username,
    });
    return response.data; // Assuming this returns user data and tokens
  }

  // Function to refresh token using refresh token
  async refreshToken(refreshToken: string) {
    const response = await axiosInstance.post("/auth/refresh-token", {
      refreshToken,
    });
    return response.data; // Returns the new access token
  }
}
