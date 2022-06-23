const createMap = (listMap, Commons) => {
  const borderMap = (Commons.borderMenu * window.innerHeight) / 100;
  const borderMapTopBottom =
    (2 * (Commons.borderMapTopBottom * window.innerHeight)) / 100;
  const heightPart =
    (window.innerHeight - borderMap - borderMapTopBottom) / listMap.length;
  let id = 0;
  let heightLvl = window.innerHeight - borderMapTopBottom / 100;
  let returnfunction = [];
  listMap.forEach((level, index) => {
    const widthPart = window.innerWidth / level.length;
    heightLvl -= heightPart;
    let pxMove = widthPart / 2;
    if (returnfunction.length !== 1) returnfunction.push([]);
    for (let i = 0; i < level.length; i++) {
      returnfunction[returnfunction.length - 1].push({
        id: id,
        difficulty: level[i].difficulty,
        type: level[i].type,
        px: Math.round((pxMove / window.innerWidth) * 100, 2),
        py: Math.round((heightLvl / window.innerHeight) * 100, 2),
      });
      pxMove += widthPart;
      id++;
    }
  });
  return returnfunction;
};
export default createMap;
