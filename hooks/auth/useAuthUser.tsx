import { auth } from '@/db/firebase';
import { useUserAuthStore } from '@/store/userAuthStore';
import { onAuthStateChanged } from 'firebase/auth';
import { Dispatch, SetStateAction, useEffect } from 'react';

const useAuthUser = (setIsReadyUserAuth: Dispatch<SetStateAction<boolean>>) => {
  const setUserAuth = useUserAuthStore((state) => state.setUserAuth);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      }
      setIsReadyUserAuth(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);
};

export default useAuthUser;
