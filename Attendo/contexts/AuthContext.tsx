import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  user: any;
  setUser: (user: any) => void;
  signUp: (
    fullName: string,
    email: string,
    password: string,
    userCode: string,
    phoneNumber: string
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signUp = async (
    fullName: string,
    email: string,
    password: string,
    userCode: string,
    phoneNumber: string
  ) => {
    console.log("Signing up:", fullName, email);
    // Replace this with your Firebase/API signup logic
    setUser({ fullName, email, userCode, phoneNumber });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
