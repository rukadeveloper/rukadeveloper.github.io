import { create } from "zustand";

const useSearch = create((set) => ({
  search: {
    isSearch: false,
  },
  setIsSearch: (isSearch) =>
    set((state) => ({
      search: {
        ...state.search,
        isSearch: isSearch,
      },
    })),
}));

export default useSearch;
