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
