// src/modules/auth/application/AuthService.ts
import { AuthRepository } from "../infrastructure/AuthRepository";

export class AuthService {
  private authRepo = new AuthRepository();

  // Function to login and get tokens
  async login(email: string, password: string): Promise<void> {
    const response = await this.authRepo.login(email, password);
    const { accessToken, refreshToken } = response;

    // Save tokens to localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  // Function to register a new user
  async register(
    email: string,
    password: string,
    username: string
  ): Promise<void> {
    const response = await this.authRepo.register(email, password, username);
    const { accessToken, refreshToken } = response;

    // Save tokens to localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  // Function to refresh access token
  async refreshAccessToken(refreshToken: string): Promise<string> {
    const response = await this.authRepo.refreshToken(refreshToken);
    return response.accessToken; // Returns the new access token
  }

  // Function to logout user
  async logout() {
    // Remove tokens from localStorage and redirect to login page
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login page
  }
}
