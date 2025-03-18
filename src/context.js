// context.js
import { createContext, useState } from "react";

const userContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {} 
});

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <userContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
