import { useState, useEffect } from "react";
import useLoginToken from "../store/useLoginToken";

const useUpdateEmail = () => {
  const { loginData } = useLoginToken();

  const [updatingEmail, setUpdatingEmail] = useState({
    value: loginData.uemail,
    valid: false,
    error: "",
    touched: false,
  });

  useEffect(() => {
    if (updatingEmail.touched) {
      setUpdatingEmail((prev) => ({
        ...prev,
        valid: prev.value.trim() !== null && prev.value.includes("@"),
      }));
      setUpdatingEmail((prev) => ({
        ...prev,
        error:
          prev.value.trim() !== null && prev.value.includes("@")
            ? "올바른 이메일입니다."
            : "올바른 이메일이 아닙니다.",
      }));
    }
  }, [updatingEmail.value, loginData.uemail, updatingEmail.touched]);

  const emailChange = (e) => {
    setUpdatingEmail((prev) => ({ ...prev, value: e.target.value }));
  };

  const emailBlur = (e) => {
    setUpdatingEmail((prev) => ({ ...prev, touched: true }));
  };

  return {
    emailChange,
    emailBlur,
    emailValid: updatingEmail.valid,
    emailError: updatingEmail.error,
    emailValue: updatingEmail.value,
    emailTouched: updatingEmail.touched,
  };
};

export default useUpdateEmail;
