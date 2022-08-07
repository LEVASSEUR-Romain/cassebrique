const bombPlayer = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //destructiring
  const { Player, Bomb } = objectGlobal;
  //const
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  const rightBomb = Bomb.x;
  const leftBomb = Bomb.x + (Bomb.width * canvasPlay.width) / 100;
  if (
    rightBomb >= Player.x &&
    leftBomb <= Player.x + playerWidth &&
    Bomb.active
  ) {
    //lose 1 pv
    return playerLoseLife(objectGlobal);
  }
};
export default bombPlayer;
