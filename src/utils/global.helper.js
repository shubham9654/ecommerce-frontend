export const extractNum = (str) => {
  return Number(str.toString().replace(/[^0-9]/g,''));
}

export const validateName = (password) => {
  return String(password).length > 1;
};

export const validateUsername = (password) => {
  return String(password).length > 1;
};

export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email.toLowerCase());
};

export const validatePassword = (password) => {
  return String(password).length > 6;
};