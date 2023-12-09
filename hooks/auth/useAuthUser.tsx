import { auth } from '@/db/firebase';
import { useUserAuthStore } from '@/store/userAuthStore';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const useAuthUser = () => {
  const setUserAuth = useUserAuthStore((state) => state.setUserAuth);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
};

export default useAuthUser;
