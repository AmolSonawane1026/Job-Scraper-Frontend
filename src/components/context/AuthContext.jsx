'use client';

import React, { createContext, useState, useEffect } from 'react';
import { getToken, setToken, removeToken } from '../utils/auth';
import { loginAPI, signupAPI, verifyTokenAPI } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, check if token is valid.
  useEffect(() => {
    const checkUser = async () => {
      const token = getToken();
      if (token) {
        try {
          const userData = await verifyTokenAPI(token);
          setUser(userData);
        } catch {
          setUser(null);
          removeToken();
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { token, user } = await loginAPI(email, password);
      setToken(token);
      setUser(user);
      return true;
    } catch {
      return false;
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await signupAPI(email, password);
      return response.success;
    } catch {
      return false;
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
