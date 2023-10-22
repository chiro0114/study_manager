"use client";

import { useUser } from "@/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";

type InitProviderProps = {
  children: React.ReactNode;
};

const InitProvider: React.FC<InitProviderProps> = ({ children }) => {
  const { user, initUser } = useUser();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        initUser(user.uid);
      } else {
        console.log("not loggedin");
      }
    });
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <>{children}</>;
};

export default InitProvider;
