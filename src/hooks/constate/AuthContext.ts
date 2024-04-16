import { useState } from 'react';

import constate from 'constate';

import { Site, User } from '@/api/auth/types';

const useAuthData = () => {
  const [user, setUser] = useState<User>();
  const [site, setSite] = useState<Site>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isInit, setIsinit] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return {
    isLogin,
    setIsLogin,
    user,
    setUser,
    site,
    setSite,
    isAdmin,
    isInit,
    setIsAdmin,
    setIsinit,
  };
};

export const [AuthProvider, useAuthContext] = constate(useAuthData);
