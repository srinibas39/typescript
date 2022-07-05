import React, { createContext, useContext, useState } from "react";

type AuthProps = {
  children: React.ReactNode;
};

type authUserProp = {
  name: string;
  email: string;
};

type userContextType = {
  user: authUserProp | null;
  setUser: React.Dispatch<React.SetStateAction<authUserProp | null>>;
};

export const AuthContext = createContext({} as userContextType);

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<authUserProp | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
