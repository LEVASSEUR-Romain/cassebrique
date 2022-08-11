const createMap = (listMap, Commons, canvasMap) => {
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const borderMap = (Commons.borderMenu * window.innerHeight - border) / 100;
  const borderMapTopBottom =
    (2 * (Commons.borderMapTopBottom * window.innerHeight - border)) / 100;
  const heightPart =
    (window.innerHeight - borderMap - borderMapTopBottom) / listMap.length;
  let id = 1;
  let heightLvl = window.innerHeight - border - borderMapTopBottom / 100;
  let returnArray = [];
  listMap.forEach((level) => {
    const widthPart = window.innerWidth / level.length;
    heightLvl -= heightPart;
    let pxMove = widthPart / 2;
    returnArray.push([]);
    for (let i = 0; i < level.length; i++) {
      returnArray[returnArray.length - 1].push({
        id: id,
        difficulty: level[i].difficulty,
        type: level[i].type,
        lvlX: i + 1,
        lvlY: returnArray.length,
        px: Math.round((pxMove / window.innerWidth) * 100, 2),
        py: Math.round((heightLvl / window.innerHeight) * 100, 2),
        finish: false,
        bonus: level[i].bonus,
        parent: level[i].parent,
      });
      pxMove += widthPart;
      id++;
    }
  });
  return returnArray;
};
export default createMap;
