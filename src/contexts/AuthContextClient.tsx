"use client";

import { IUser } from "@/types/User";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  setUser: (data: IUser | null) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  initialData: IUser | null;
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  initialData,
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(initialData);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      setUser,
    }),
    [user, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthClient = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthClient must be used within a AuthProvider");
  }
  return context;
};
