import { useState, useEffect } from "react";

const useUpdatePasswordCheck = (password) => {
  const [updatingPasswordCheck, setUpdatingPasswordCheck] = useState({
    value: "",
    valid: false,
    error: "",
    touched: false,
  });

  useEffect(() => {
    if (updatingPasswordCheck.touched) {
      setUpdatingPasswordCheck((prev) => ({
        ...prev,
        valid:
          password &&
          updatingPasswordCheck.value &&
          password === updatingPasswordCheck.value,
      }));
      setUpdatingPasswordCheck((prev) => ({
        ...prev,
        error:
          password &&
          updatingPasswordCheck.value &&
          password === updatingPasswordCheck.value
            ? "비밀번호가 서로 일치합니다"
            : "비밀번호가 서로 일치하지 않습니다.",
      }));
    }
  }, [updatingPasswordCheck.value, updatingPasswordCheck.touched, password]);

  const passwordCheckChange = (e) => {
    setUpdatingPasswordCheck((prev) => ({ ...prev, value: e.target.value }));
  };

  const passwordCheckBlur = (e) => {
    setUpdatingPasswordCheck((prev) => ({ ...prev, touched: true }));
  };

  return {
    passwordCheckChange,
    passwordCheckBlur,
    passCheckValid: updatingPasswordCheck.valid,
    passCheckError: updatingPasswordCheck.error,
    passCheckValue: updatingPasswordCheck.value,
    passCheckTouched: updatingPasswordCheck.touched,
  };
};

export default useUpdatePasswordCheck;
