import { create } from "zustand";

const useLoading = create((set) => ({
  rootLoading: true,
  profileLoading: false,
  loginLoading: false,
  setRootLoading: (rootLoading) => set(() => ({ rootLoading })),
  setProfileLoading: (profileLoading) => set(() => ({ profileLoading })),
  setLoginLoading: (loginLoading) => set(() => ({ loginLoading })),
}));

export default useLoading;
