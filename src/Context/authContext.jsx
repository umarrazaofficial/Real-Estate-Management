import React, { useState, useEffect, useMemo } from 'react';
import { clearCookie, getCookie, setCookie } from '../helpers/common';

import { createContextHook } from 'use-context-hook';
import Toast from '../components/molecules/Toast';
import adminService from '../services/adminService';
import { useCancellablePromise } from '../helpers/promiseHandler';

const context = {};

export const AuthContext = createContextHook(context);

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie(process.env.REACT_APP_PSP_TOKEN_COOKIE));
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const { cancellablePromise } = useCancellablePromise();
  const [reFetch, setRefetch] = useState(false);
  const [allowedPages, setAllowedPages] = useState(
    JSON.parse(getCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE)) || [],
  );
  const onLogout = async () => {
    try {
      if (isLoggedIn) setLoadingUser(true);
      const res = await adminService.removeAdminJwt();
      if (res) {
        clearCookie(process.env.REACT_APP_PSP_TOKEN_COOKIE);
        clearCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE);
        clearCookie('_type');
        setAllowedPages([]);
      }
    } catch (ex) {
      clearCookie(process.env.REACT_APP_PSP_TOKEN_COOKIE);
      clearCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE);
      clearCookie('_type');
      Toast({ type: 'error', message: ex?.message });
    } finally {
      setLoadingUser(false);
      setIsLoggedIn(false);
    }
  };

  const getPermissions = () => {
    setLoadingUser(true);
    const currentType = getCookie('_type');
    if (currentType === 'merchant') {
      setLoadingUser(false);
    } else {
      cancellablePromise(adminService.getCurrentAdmin())
        .then(res => {
          setAllowedPages([...res.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[0])]);

          setCookie(
            process.env.REACT_APP_ALLOWED_PAGES_COOKIE,
            JSON.stringify(res.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[0])),
          );
          setLoadingUser(false);
          setUser(res);
        })
        .catch(err => {
          // setAllowedPages(["no-permissions"]);
          setAllowedPages([]);
          setCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE, JSON.stringify([]));
          //   setCookie(process.env.REACT_APP_ALLOWED_PAGES_COOKIE, JSON.stringify(['no-permissions']));
          setLoadingUser(false);
          Toast({
            type: 'error',
            message: err.message,
          });
        });
    }
  };

  /**
   * @description - This function is used to fetch the user details from the server
   */
  useEffect(() => {
    if (isLoggedIn) {
      getPermissions();
    }
    // listen to event
    window.addEventListener('FETCH_ADMIN_ROLE', () => {
      getPermissions();
    });
    return () => {
      window.removeEventListener('FETCH_ADMIN_ROLE', () => {
        getPermissions();
      });
    };
  }, [isLoggedIn, fetch_user]);

  const onLogin = async ({ email, password, type }) => {
    setLoadingUser(true);
    try {
      if (type === 'admin') {
        const res = await adminService.login({
          email,
          password,
        });
        if (!res?.token) {
          throw new Error(res?.message);
        }
        setCookie(process.env.REACT_APP_PSP_TOKEN_COOKIE, res.token);
        setCookie('_type', !res?.businessUser && 'admin');
        setIsLoggedIn(true);
      } else if (type?.value === 'merchant') {
        const res = await adminService.merchantLogin({
          email,
          password,
        });
        if (!res?.token) {
          throw new Error(res?.message);
        }
        setUser(res?.businessUser);
        setCookie(process.env.REACT_APP_PSP_TOKEN_COOKIE, res.token);
        setCookie('_type', res?.businessUser && 'merchant');
        setIsLoggedIn(true);
        setAllowedPages([...res?.businessUser?.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[0])]);
        setCookie(
          process.env.REACT_APP_ALLOWED_PAGES_COOKIE,
          JSON.stringify(res?.businessUser?.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[0])),
        );
      }
    } catch ({ message }) {
      setIsLoggedIn(false);
      setLoadingUser(false);
      Toast({ type: 'error', message });
    }
  };

  const hasPermission = perm => user?.permissions?.includes(perm);

  // const allContext = useMemo(
  //   () => ({
  //     setIsLoggedIn,
  //     onLogout,
  //     onLogin,
  //     refetch: () => setRefetch(_ => !_),
  //     fetchUser: () => setFetchUser(() => !fetch_user),
  //     setLoading,
  //     hasPermission,
  //     allowedPages,
  //     loading,
  //     isLoggedIn,
  //     fetch: reFetch,
  //     user,
  //     loading_user,
  //   }),
  //   [isLoggedIn, onLogin, user, hasPermission, allowedPages],
  // );
  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        onLogout,
        onLogin,
        refetch: () => setRefetch(_ => !_),
        fetchUser: () => setFetchUser(() => !fetch_user),
        setLoading,
        hasPermission,
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
