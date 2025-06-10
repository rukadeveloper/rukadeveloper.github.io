const VALIDATOR_TYPE_ENG_NUMBER = "영문 또는 숫자";
const VALIDATOR_TYPE_MINLENGTH = "6자 이상";
const VALIDATOR_TYPE_MAXLENGTH = "6자 이하";
const VALIDATOR_TYPE_MIN = "중복확인";
const VALIDATOR_TYPE_EMAIL = "@ 포함";

export const VALIDATOR_ENG_NUMBER = () => ({
  type: VALIDATOR_TYPE_ENG_NUMBER,
});
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val) => ({
  type: VALIDATOR_TYPE_MIN,
  val: val,
});
export const VALIDATOR_EMAIL = (val) => ({
  type: VALIDATOR_TYPE_EMAIL,
  val: val,
});

export const validate = (value, validators) => {
  let isValid = true;
  let idEngValid = true;
  let idMinValid = true;
  let idCheckValid = true;
  let passwordMinValid = true;
  let passwordMaxValid = true;
  let emailValid = false;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_ENG_NUMBER) {
      idEngValid = idEngValid && /^[A-Za-z0-9]+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      idMinValid = idMinValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      idCheckValid = idCheckValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      emailValid = value.includes("@");
    }
  }
  return {
    idEngValid,
    idMinValid,
    idCheckValid,
    isValid,
  };
};
