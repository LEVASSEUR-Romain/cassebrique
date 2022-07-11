const finishItemMap = (id, itemMap) => {
  let findId = "";
  for (let i = 0; i < itemMap.length; i++) {
    findId = itemMap[i].find((elmt) => elmt.id === id);
    if (findId !== undefined) break;
  }
  if (findId !== undefined) {
    findId.finish = true;
  }
};
export default finishItemMap;
