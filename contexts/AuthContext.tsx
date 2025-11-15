import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  isSignedIn: boolean;
  signIn: (token?: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps>({
  isSignedIn: false,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const bootstrap = async () => {
      const token = await AsyncStorage.getItem("MediConnectToken");
      setIsSignedIn(!!token);
    };
    bootstrap();
  }, []);

  const signIn = async (token = "demo-token") => {
    await AsyncStorage.setItem("MediConnectToken", token);
    setIsSignedIn(true);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("MediConnectToken");
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
