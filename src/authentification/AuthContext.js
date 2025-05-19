import React, { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);


  export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const users = [
    {
      email: "admin@nordsud.bj",
      password: "admin123",
      role: "admin"
    },
    {
      email: "client@nordsud.bj",
      password: "client00123",
      role: "client"
    }
  ];
  

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole'); 
    if (token && role) {
      setUser({ token, role });
    }
  }, []);

  const login = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (foundUser) {
      const fakeToken = "fake-jwt-token"; 
      localStorage.setItem("authToken", fakeToken);
      localStorage.setItem("userRole", foundUser.role);
      setUser({ token: fakeToken, role: foundUser.role });
      return true; 
    }
  
    return false; 
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
