const playerBall = (
  { Ball, Player, canvasPlay },
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //const
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  if (
    ballXRight >= Player.x &&
    ballXLeft <= Player.x + playerWidth &&
    ballYBottom >= Player.y &&
    ballYTop < canvasPlay.height
  ) {
    // ball vers le haut
    Ball.angleDirectionY = -1;
    const centerPlayerX = Player.x + playerWidth / 2;
    if (Ball.x < centerPlayerX) {
      Ball.angleDirectionX = (Ball.x - centerPlayerX) / (playerWidth / 2);
    } else if (Ball.x > centerPlayerX) {
      Ball.angleDirectionX = -(centerPlayerX - Ball.x) / (playerWidth / 2);
    } else {
      Ball.angleDirectionX = 0;
    }
  }
};
export default playerBall;
