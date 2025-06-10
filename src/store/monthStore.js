import { create } from "zustand";

const useStore = create((set) => ({
  selectedMonth: "2025 04",
  setSelectedMonth: (month) => set({ selectedMonth: month }),
}));

export default useStore;
