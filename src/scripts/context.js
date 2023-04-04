import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [background, setBackground] = useState(0);
  return <UserContext.Provider value={{ background, setBackground }}>{children}</UserContext.Provider>;
};
