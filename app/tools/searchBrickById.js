const searchBrickById = (listLvl, id) => {
  let object = {};
  for (let i = 0; i < listLvl.length; i++) {
    const testFind = listLvl[i].find((lvl) => lvl.id === id);
    if (testFind) {
      object = testFind;
      break;
    }
  }
  return Object.keys(object).length === 0 ? false : object;
};
export default searchBrickById;
