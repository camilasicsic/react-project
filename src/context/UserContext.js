import React, { createContext, useEffect, useState } from 'react';

const initialState = {};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const getStoredUser = () => {
    const userStored = localStorage.getItem('ecommerce-user');
    if (!userStored) return undefined;
    const userS = userStored.split(';');
    return {
      displayName: userS[0],
      email: userS[1],
      uid: userS[2],
    };
  };
  const [user, setUser] = useState(getStoredUser());

  useEffect(() => {
    const userStored = localStorage.getItem('ecommerce-user');
    if (userStored) {
      const userS = userStored.split(';');
      setUser({
        displayName: userS[0],
        email: userS[1],
        uid: userS[2],
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
