export const playerLoseLife = (objectGlobal) => {
  const { Player, Commons } = objectGlobal;
  Player.life -= 1;
  // lose width
  Player.width -= Commons.playerLoseLifeWitdh;
};
