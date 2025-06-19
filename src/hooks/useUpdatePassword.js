import { useState, useEffect } from "react";

const useUpdatePassword = () => {
  const [updatingPassword, setUpdatingPassword] = useState({
    value: "",
    valid: false,
    error: "",
    touched: false,
  });

  useEffect(() => {
    if (updatingPassword.touched) {
      setUpdatingPassword((prev) => ({
        ...prev,
        valid:
          prev.value !== null &&
          /[A-Za-z0-9!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]{6,}/.test(prev.value) &&
          prev.value.length >= 6,
      }));
      setUpdatingPassword((prev) => ({
        ...prev,
        error:
          prev.value !== null &&
          /[A-Za-z0-9!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]{6,}/.test(prev.value) &&
          prev.value.length >= 6
            ? "올바른 비밀번호입니다."
            : "비밀번호 규칙에 맞지 않습니다.",
      }));
    }
  }, [updatingPassword.value, updatingPassword.touched]);

  const passwordChange = (e) => {
    setUpdatingPassword((prev) => ({ ...prev, value: e.target.value }));
  };

  const passwordBlur = (e) => {
    setUpdatingPassword((prev) => ({ ...prev, touched: true }));
  };

  return {
    passwordChange,
    passwordBlur,
    passValid: updatingPassword.valid,
    passError: updatingPassword.error,
    passValue: updatingPassword.value,
    passTouched: updatingPassword.touched,
  };
};

export default useUpdatePassword;
