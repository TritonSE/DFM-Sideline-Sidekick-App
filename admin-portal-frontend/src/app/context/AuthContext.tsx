"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase-config";

// Define the context type with user (Firebase User or null) and loading (boolean)
type AuthContextType = {
  user: User | null; // Firebase User type or null when no user is logged in
  loading: boolean;
};

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null); // user is either null or a User
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (userI) => {
      setUser(userI); // Firebase returns null when no user is logged in
      setLoading(false); // Loading complete after checking auth state
    });
    return () => {
      unsubscribe();
    }; // Clean up the subscription on unmount
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

// Hook to use AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
