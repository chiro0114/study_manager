"use client";

import { useUser } from "@/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type InitProviderProps = {
  children: React.ReactNode;
};

const InitProvider: React.FC<InitProviderProps> = ({ children }) => {
  const { user, initUser } = useUser();
  const router = useRouter();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        initUser(user.uid);
      } else {
        router.push("/signin");
      }
    });
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <>{children}</>;
};

export default InitProvider;
