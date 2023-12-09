'use client';

import useAuthUser from '@/hooks/auth/useAuthUser';

type Props = {
  children: React.ReactNode;
  isWithAuth?: boolean;
};

const WithAuthProvider: React.FC<Props> = ({ children }) => {
  useAuthUser();
  return <>{children}</>;
};

export default WithAuthProvider;
