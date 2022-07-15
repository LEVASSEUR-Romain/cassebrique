const loseLifeRestartPosition = (player, ball) => {
  ball.x = (player.width * window.innerWidth) / 100 / 2 + player.x;
  const ratio = window.innerWidth / window.innerHeight;
  ball.y = player.y - (ball.radius * window.innerHeight * ratio) / 100;
};
export default loseLifeRestartPosition;
