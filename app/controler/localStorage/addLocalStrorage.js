const addLocalStrorage = (add, type) => {
  const toUp = JSON.stringify(add);
  localStorage.setItem(type, toUp);
};
export default addLocalStrorage;
