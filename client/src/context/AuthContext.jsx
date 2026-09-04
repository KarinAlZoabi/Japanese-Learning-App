import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
   * Restore the current session.
   *
   * The JWT is stored in an HttpOnly cookie, so the frontend
   * never needs access to the token itself.
   */
  const refreshUser = useCallback(async () => {
    try {
      const response = await api.get("/auth/me");

      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /*
   * Restore the session when the application starts.
   */
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  /*
   * Register a new user.
   */
  const register = async (userData) => {
    const response = await api.post("/auth/register", userData);

    setUser(response.data.user);

    return response.data.user;
  };

  /*
   * Login.
   */
  const login = async (email, password, rememberMe = false) => {
    const response = await api.post("/auth/login", {
      email,
      password,
      rememberMe,
    });

    setUser(response.data.user);

    return response.data.user;
  };

  /*
   * Logout.
   */
  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}