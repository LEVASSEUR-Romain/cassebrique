export const emptyBomb = (objectGlobal) => {
  objectGlobal.Bomb = {};
};

export const deleteBomb = (objectGlobal) => {
  if (objectGlobal.Bomb) {
    delete objectGlobal.Bomb;
  }
};

const tierBomb = (objectGlobal) => {
  const tier = objectGlobal.Boss.mapTierTarget;
  const { canvasPlay } = objectGlobal;
  const playWidthTier = (1 / 3) * canvasPlay.width;

  switch (tier) {
    case 1:
      return { x: 0, y: playWidthTier, width: playWidthTier };
    case 2:
      return {
        x: playWidthTier,
        y: playWidthTier * 2,
        width: playWidthTier,
      };
    case 3:
      return {
        x: playWidthTier * 2,
        y: playWidthTier * 3,
        width: playWidthTier,
      };
  }
};

export const addBomb = (objectGlobal) => {
  const { x, y, width } = tierBomb(objectGlobal);
  objectGlobal.Bomb = {
    x: x,
    y: y,
    width: width,
    active: 0,
    previewframe: false,
  };
};

export const setPreviewframe = (objectGlobal, bool) => {
  objectGlobal.Bomb.previewframe = bool;
};

export const fireBomb = (objectGlobal) => {
  objectGlobal.Bomb.active += 1;
  if (objectGlobal.Bomb.active > objectGlobal.Boss.bombFire)
    objectGlobal.Bomb.active = 0;
};

export const isBombFire = (objectGlobal) => {
  return objectGlobal.Bomb.active;
};

export const isBombAnimation = (objectGlobal) => {
  return objectGlobal.Bomb.previewframe;
};
