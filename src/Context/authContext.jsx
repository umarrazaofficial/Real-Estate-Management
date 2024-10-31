import React, { useState } from 'react';
import { clearCookie, getCookie, setCookie } from '../helpers/common';
import { createContextHook } from 'use-context-hook';
import Toast from '../components/molecules/Toast';
import adminService from '../services/adminService';

const context = {};

export const AuthContext = createContextHook(context);

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('admin'));
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const [reFetch, setRefetch] = useState(false);
  const [allowedPages, setAllowedPages] = useState(
    JSON.parse(getCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE)) || [],
  );
  const onLogout = async () => {
    try {
      if (isLoggedIn) setLoadingUser(true);
      clearCookie('admin');
      clearCookie('name');
    } catch (ex) {
      clearCookie('admin');
      clearCookie('name');
      Toast({ type: 'error', message: ex?.message });
    } finally {
      setLoadingUser(false);
      setIsLoggedIn(false);
    }
  };

  const onLogin = async ({ email, password }) => {
    setLoadingUser(true);
    try {
      const res = await adminService.login({
        email,
        password,
      });
      if (res?.isAdmin) {
        setCookie('admin', res?.isAdmin);
        setCookie('name', res?.name);
        setIsLoggedIn(true);
        setLoadingUser(false);
      } else {
        Toast({ type: 'error', message: 'Invalid credentials' });
        setLoadingUser(false);
      }
    } catch ({ message }) {
      setIsLoggedIn(false);
      setLoadingUser(false);
      Toast({ type: 'error', message });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        onLogout,
        onLogin,
        refetch: () => setRefetch(_ => !_),
        fetchUser: () => setFetchUser(() => !fetch_user),
        setLoading,
        allowedPages,
        loading,
        isLoggedIn,
        fetch: reFetch,
        user,
        loading_user,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
