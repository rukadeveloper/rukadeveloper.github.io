import { useEffect } from "react";
import useSearch from "../store/searchStore";

const useDimmed = () => {
  const { search } = useSearch();

  useEffect(() => {
    if (search.isSearch) {
      document.body.classList.add("dimmed");
    } else {
      document.body.classList.remove("dimmed");
    }
  }, [search.isSearch]);
};

export default useDimmed;
