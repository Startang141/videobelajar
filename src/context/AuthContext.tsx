"use client";

import { useRouter } from "next/navigation";
import { Users } from "../lib/dummyUser";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "sonner";

interface UserType {
  id: number;
  name: string;
  email: string;
  profile: string;
  role: string;
}

interface AuthContextType {
  userLogin: UserType | null;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userLogin, setUserLogin] = useState<UserType | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser) as UserType;
  });

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const User = Users.find(
      (item) => item.email === email && item.password === password,
    );

    if (!User) {
      toast.error("Email atau Password Salah");
      return;
    }

    const loggedInUser: UserType = {
      id: User.id,
      name: User.name,
      email: User.email,
      profile: User.profile,
      role: User.role,
    };
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    setUserLogin(loggedInUser);

    toast.success(`Login berhasil sebagai ${User.role}`);

    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    toast.success(`Logout berhasil`);
    setUserLogin(null);

    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ userLogin, handleLogin, handleLogout }}>
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
