import { createContext, useState, useContext } from "react";

interface AuthUser {
  name: string;
  email: string;
}
interface Props {
  children: React.ReactNode;
}

interface UserContextType {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

// * using assertion
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
