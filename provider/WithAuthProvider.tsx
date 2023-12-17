'use client';

import useAuthUser from '@/hooks/auth/useAuthUser';
import useUserAuthGuard from '@/hooks/auth/useUserAuthGuard';
import { useUserAuthStore } from '@/store/userAuthStore';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  isWithAuth?: boolean;
};

const WithAuthProvider: React.FC<Props> = ({ children }) => {
  const userAuth = useUserAuthStore((state) => state.userAuth);
  const [isReadyUserAuth, setIsReadyUserAuth] = useState(false);
  useAuthUser(setIsReadyUserAuth);
  useUserAuthGuard(isReadyUserAuth);
  return <>{children}</>;
};

export default WithAuthProvider;
