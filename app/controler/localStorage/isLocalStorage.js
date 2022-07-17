import getLocalStrorage from "./getLocalStrorage.js";
const isLocalStorage = () => {
  if (getLocalStrorage("player")) return true;
  return false;
};
export default isLocalStorage;
