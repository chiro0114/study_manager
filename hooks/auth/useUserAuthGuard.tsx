'use client';

import { usePathname } from 'next/navigation';

const useUserAuthGuard = (isReadyUserAuth: boolean) => {
  const params = usePathname();
  if (!isReadyUserAuth) return;

  console.log(params);
};

export default useUserAuthGuard;
