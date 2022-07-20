const setPositionDefaultBall = ({ Player, Ball, canvasPlay }) => {
  //ALERT ICI
  //const ratio = canvasPlay.width / canvasPlay.height;
  //Ball.y = Player.y - (Ball.radius *ratio* canvasPlay.height) / 100;
  Ball.y = Player.y - (Ball.radiusHeight * canvasPlay.height) / 100;
  Ball.x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
};
export default setPositionDefaultBall;
