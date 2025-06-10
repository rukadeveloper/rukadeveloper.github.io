import { create } from "zustand";

const useSwipers = create((set) => ({
  swipers: {
    barLeft: 0,
    max: 0,
  },
  setBarLefts: (barLeft, max) => {
    console.log("setBarLeft 내부 max:", max);
    set((state) => ({
      swipers: {
        ...state.swipers,
        barLeft,
        max,
      },
    }));
  },
}));

export default useSwipers;
