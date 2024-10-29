import React, { useState, useEffect, createContext, useContext } from "react";

// Create the context
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);         // Holds the user's authentication state
  const [isLoading, setIsLoading] = useState(true); // Loading state for initialization

  useEffect(() => {
    const user = localStorage.getItem("user"); // Check local storage for existing auth
    if (user) {
      setAuth(JSON.parse(user));               // Parse and set if user data exists
    }
    setIsLoading(false);                       // Mark loading as complete
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
