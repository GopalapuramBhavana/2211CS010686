import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const registerUser = (username, email, password) => {
    setUsers([...users, { username, email, password }]);
  };

  const authenticateUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
  };

  return (
    <UserContext.Provider value={{ registerUser, authenticateUser }}>
      {children}
    </UserContext.Provider>
  );
};
