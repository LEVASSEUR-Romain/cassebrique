const loseLifeRestartPosition = (player, ball, Commons) => {
  ball.x = player.width / 2 + player.x;
  ball.y = Commons.canvasWidth - player.height - ball.radius;
};
export default loseLifeRestartPosition;
