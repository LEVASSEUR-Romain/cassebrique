const getLocalStrorage = (type) => {
  const element = JSON.parse(localStorage.getItem(type));
  return element;
};
export default getLocalStrorage;
