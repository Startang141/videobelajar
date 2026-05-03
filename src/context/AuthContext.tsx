"use client";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isLogin: boolean;
  handleLogin: (e: React.FormEvent) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLogin(true);
    localStorage.setItem("isLogin", JSON.stringify(true));
    router.push("/");
  };
  return (
    <AuthContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth tidak bisa digunakan");
  }
  return context;
};
