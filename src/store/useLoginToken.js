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
      },
    }),
}));

export default useLoginToken;
