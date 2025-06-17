import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginToken = create(
  persist((set) => ({
    token: "",
    isAuth: false,
    setToken: (token) => set({ token, isAuth: !!token }),
    logout: () =>
      set(() => ({
        token: "",
        isAuth: false,
      })),
  }))
);

export default useLoginToken;
