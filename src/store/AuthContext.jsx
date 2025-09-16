/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { fetchUser, requestLogin } from '../components/http';

export const AuthContext = createContext({
  loginUser: async () => {},
  userData: '',
  isLogin: '',
});

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  async function userInfo() {
    console.log('ndnfsakdnas i here why you spo confiuse');
    const token = JSON.parse(localStorage.getItem('authToken'));
    console.log(token.accessToken);
    if (token.accessToken) {
      console.log('ffffff');
      try {
        const response = await fetchUser();
        setIsLogin(true);
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
        loginOut();
      }
    }
  }

  useEffect(() => {
    userInfo();
  }, []);

  async function loginUser(value) {
    console.log('early');
    try {
      const response = await requestLogin(value);
      console.log(response);
      localStorage.setItem(
        'authToken',
        JSON.stringify({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
      userInfo();
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  function loginOut() {
    localStorage.removeItem('authToken');
    setUserData({});
    setIsLogin(false);
  }

  const valueCtx = { userData, isLogin, loginUser };
  return (
    <AuthContext.Provider value={valueCtx}>{children}</AuthContext.Provider>
  );
}
