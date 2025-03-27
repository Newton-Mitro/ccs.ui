// src/shared/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { AuthService } from "../../modules/auth/application/AuthService";

const authService = new AuthService();

interface AuthContextProps {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const refreshSession = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return;

        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) return;

        const refreshedAccessToken = await authService.refreshAccessToken(
          refreshToken
        );
        setUser({ accessToken: refreshedAccessToken });
      } catch (error) {
        console.log("Session expired or refresh failed, logging out...");
        logout();
      }
    };

    const token = localStorage.getItem("accessToken");
    if (token) refreshSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await authService.login(email, password);
      const accessToken = localStorage.getItem("accessToken");
      setUser({ accessToken });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      await authService.register(email, password, username);
      const accessToken = localStorage.getItem("accessToken");
      setUser({ accessToken });
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
