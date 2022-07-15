const playerBall = (
  { Ball, Player },
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //const
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const playerWidth = (Player.width * window.innerWidth) / 100;
  const playerHeight = (Player.height * (window.innerHeight - border)) / 100;

  if (
    ballXRight > Player.x &&
    ballXLeft < Player.x + playerWidth &&
    ballYBottom > Player.y &&
    ballYTop < Player.y + playerHeight
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
