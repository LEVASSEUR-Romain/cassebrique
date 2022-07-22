export const emptyBomb = (objectGlobal) => {
  objectGlobal.Bomb = [];
};

export const deleteBomb = (objectGlobal) => {
  if (objectGlobal.Bomb) {
    delete objectGlobal.Bomb;
  }
};

export const addBomb = (objectGlobal, x, y, width) => {
  objectGlobal.Bomb.push({
    x: x,
    y: y,
    width: width,
  });
};
