export const validate = (validators, value) => {
  let idCheck = false;
  let pwdCheck = false;
  if (validators === "ID CHECK") {
    const engNumber = /^[A-Za-z0-9]+$/;
    idCheck = value.trim().length > 0 && engNumber.test(value.trim());
    return idCheck;
  }
  if (validators === "PW CHECK") {
    pwdCheck = value.trim().length > 0 && value.trim().length <= 8;
    return pwdCheck;
  }
};
