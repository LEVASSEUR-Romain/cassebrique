const setPositionRezise = ({ Ball, Player }) => {
  Player.y = canvasPlay.height - (Player.height * canvasPlay.height) / 100;
  // boss 2 multiBall
  const ball = Array.isArray(Ball) ? Ball[0] : Ball;
  ball.y = Player.y - (ball.radiusHeight * canvasPlay.height) / 100;
  ball.x = Player.x + (Player.width * canvasPlay.width) / 100 / 2;
};
export default setPositionRezise;
