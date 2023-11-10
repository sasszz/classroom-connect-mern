import React, { useState, useContext, ReactNode } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  // Other user properties
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const UserContext = React.createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
