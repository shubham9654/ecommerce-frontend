export const extractNum = (str) => {
  return Number(str.toString().replace(/[^0-9]/g,''));
}