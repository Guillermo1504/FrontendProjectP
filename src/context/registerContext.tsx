import React, { createContext, useState, ReactNode, useContext } from "react";
import { registerRequest } from "../api/createUser";
import { AuthContextType, User } from "./types";

// Define los tipos de datos

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Invalid");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (newUser: User) => {
    try {
      const res = await registerRequest(newUser);
      console.log(res.data, "🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️");
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
