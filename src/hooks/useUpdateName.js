import { useState, useEffect } from "react";
import useLoginToken from "../store/useLoginToken";

const useUpdateName = () => {
  const { loginData } = useLoginToken();

  const [updatingName, setUpdatingName] = useState({
    value: loginData.uname,
    valid: false,
    error: "",
    touched: false,
  });

  useEffect(() => {
    if (updatingName.touched) {
      setUpdatingName((prev) => ({
        ...prev,
        valid: prev.value !== null,
      }));
      setUpdatingName((prev) => ({
        ...prev,
        error:
          prev.value !== null
            ? "올바른 이름입니다."
            : "올바른 이름이 아닙니다.",
      }));
    }
  }, [updatingName.value, loginData.uname, updatingName.touched]);

  const nameChange = (e) => {
    setUpdatingName((prev) => ({ ...prev, value: e.target.value }));
  };

  const nameBlur = (e) => {
    setUpdatingName((prev) => ({ ...prev, touched: true }));
  };

  return {
    nameChange,
    nameBlur,
    nameValid: updatingName.valid,
    nameError: updatingName.error,
    nameValue: updatingName.value,
    nameTouched: updatingName.touched,
  };
};

export default useUpdateName;
