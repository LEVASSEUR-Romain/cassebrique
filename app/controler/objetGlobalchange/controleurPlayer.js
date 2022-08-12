export const playerLoseLife = (objectGlobal) => {
  const { Player, Commons } = objectGlobal;
  Player.life -= 1;
  // lose width
  Player.width -= Commons.playerLoseLifeWitdh;
};

export const setPositionDefaultPlayer = ({ Player, canvasPlay }) => {
  Player.x = 0;
  Player.y = canvasPlay.height - (Player.height * canvasPlay.height) / 100;
};

export const setPositioMapPlayer = (objectGlobal, elementCible) => {
  const { Player, Commons } = objectGlobal;
  // margin
  const marginX = elementCible.px - 3 * Commons.radiusItemMap;
  const marginY = elementCible.py - Commons.radiusItemMap;
  Player.pxMap = marginX;
  Player.pyMap = marginY;
};
