const setPositionDefaultBall = ({ Player, Ball, canvasPlay }) => {
  if (Array.isArray(Ball)) {
    Ball[0].y = Player.y - (Ball[0].radiusHeight * canvasPlay.height) / 100;
    Ball[0].x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
  } else {
    Ball.y = Player.y - (Ball.radiusHeight * canvasPlay.height) / 100;
    Ball.x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
  }
};
export default setPositionDefaultBall;
