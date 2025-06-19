import { create } from "zustand";

const useLoginToken = create((set) => ({
  token: "",
  isAuth: false,
  loginData: {
    uid: "",
    password: "",
    uname: "",
    uemail: "",
    role: "",
  },
  setAuth: (auth) => set({ isAuth: auth }),
  logout: () =>
    set(() => ({
      token: "",
      isAuth: false,
    })),
  setLoginData: (data) =>
    set({
      loginData: {
        uid: data.uid,
        password: data.encodedPassword,
        uname: data.uname,
        uemail: data.uemail,
        role: data.role,
        phone: data.phone,
        profile: data.profile,
      },
    }),
  setProfile: (profile) =>
    set((state) => ({
      loginData: {
        ...state.loginData,
        profile,
      },
    })),
}));

export default useLoginToken;
