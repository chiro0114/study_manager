import { create } from "zustand";
import { db } from "@/db/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

type UserType = {
  user: {
    id: string;
  } | null;
  createUser: (uid: string) => void;
  initUser: (uid: string) => void;
};

export const useUser = create<UserType>((set) => ({
  user: null,
  createUser: async (uid) => {
    try {
      const userRef = doc(db, "user", uid, "state", "todo");
      await setDoc(userRef, { todo: [], doing: [], done: [] });
    } catch (e) {
      console.log(e);
    }
  },
  initUser: (uid) => {
    set((state) => ({
      ...state,
      user: {
        id: uid,
      },
    }));
  },
}));
