const createMap = (listMap, Commons) => {
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const borderMap = (Commons.borderMenu * window.innerHeight - border) / 100;
  const borderMapTopBottom =
    (2 * (Commons.borderMapTopBottom * window.innerHeight - border)) / 100;
  const heightPart =
    (window.innerHeight - borderMap - borderMapTopBottom) / listMap.length;
  let id = 1;
  let heightLvl = window.innerHeight - border - borderMapTopBottom / 100;
  let returnfunction = [];
  listMap.forEach((level) => {
    const widthPart = window.innerWidth / level.length;
    heightLvl -= heightPart;
    let pxMove = widthPart / 2;
    returnfunction.push([]);
    for (let i = 0; i < level.length; i++) {
      returnfunction[returnfunction.length - 1].push({
        id: id,
        difficulty: level[i].difficulty,
        type: level[i].type,
        px: Math.round((pxMove / window.innerWidth) * 100, 2),
        py: Math.round((heightLvl / window.innerHeight) * 100, 2),
        parent: level[i].parent,
      });
      pxMove += widthPart;
      id++;
    }
  });

  return returnfunction;
};
export default createMap;
