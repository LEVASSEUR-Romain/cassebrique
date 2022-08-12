const finishItemMap = (objectGlobal) => {
  const id = objectGlobal.Player.currentIdLvl;
  const itemMapPosition = objectGlobal.itemMapPosition;
  let findId = "";
  for (let i = 0; i < itemMapPosition.length; i++) {
    findId = itemMapPosition[i].find((elmt) => elmt.id === id);
    if (findId !== undefined) break;
  }
  if (findId !== undefined) {
    findId.finish = true;
  }
};
export default finishItemMap;
