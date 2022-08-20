const isFinishMap = (objectGlobal) => {
  const { itemMapPosition } = objectGlobal;
  const lastItem = itemMapPosition[itemMapPosition.length - 1];
  const find = lastItem.find((element) => element.finish === true);
  return find === undefined ? false : true;
};
export default isFinishMap;
