export const addBrik = (objectGlobal, px, py, lvlBrik) => {
  // add on bricks
  objectGlobal.Briks.push({
    x: px,
    y: py,
    id: lvlBrik,
    life: objectGlobal.Commons.brick[lvlBrik - 1].life,
    px: Math.round((px / objectGlobal.canvasPlay.width) * 100, 2),
    py: Math.round((py / objectGlobal.canvasPlay.height) * 100, 2),
  });
};
