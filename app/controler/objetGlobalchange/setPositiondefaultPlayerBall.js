const setPositiondefaultBall = (objectGlobal) => {
  const { Player, Commons, Ball, canvasPlay } = objectGlobal;
  const ratio = canvasPlay.width / canvasPlay.height;
  Ball.y = Player.y - (Ball.radius * ratio * canvasPlay.height) / 100;
  Ball.x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
};
export default setPositiondefaultBall;
