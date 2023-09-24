import { create } from "zustand";

type UserType = {
  user: {
    id: string;
  } | null;
};

const useUser = create<UserType>((set) => ({
  user: null,
}));
