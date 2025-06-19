import { useState, useEffect } from "react";
import useLoginToken from "../store/useLoginToken";

const useUpdatePhone = () => {
  const { loginData } = useLoginToken();

  const [updatingPhone, setUpdatingPhone] = useState({
    value: loginData.phone,
    valid: false,
    error: "",
    touched: false,
  });

  useEffect(() => {
    if (updatingPhone.touched) {
      setUpdatingPhone((prev) => ({
        ...prev,
        valid: prev.value !== null,
      }));
      setUpdatingPhone((prev) => ({
        ...prev,
        error:
          prev.value !== null
            ? "올바른 전화번호입니다."
            : "올바른 전화번호가 아닙니다.",
      }));
    }
  }, [updatingPhone.value, loginData.phone, updatingPhone.touched]);

  const phoneChange = (e) => {
    setUpdatingPhone((prev) => ({ ...prev, value: e.target.value }));
  };

  const phoneBlur = (e) => {
    setUpdatingPhone((prev) => ({ ...prev, touched: true }));
  };

  return {
    phoneChange,
    phoneBlur,
    phoneValid: updatingPhone.valid,
    phoneError: updatingPhone.error,
    phoneValue: updatingPhone.value,
    phoneTouched: updatingPhone.touched,
  };
};

export default useUpdatePhone;
