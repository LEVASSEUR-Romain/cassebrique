import tuchBrick from "../model/tuchBrick.js";
import loseLife from "../model/loseLife.js";
const collisionVector = (player, bricks, ball, Commons) => {
  // const
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const goTox =
    ((ball.speed * window.innerHeight) / 100) * ball.angleDirectionX;
  const goToy =
    ((ball.speed * window.innerHeight) / 100) * ball.angleDirectionY;
  const playerWidth = (player.width * window.innerWidth) / 100;
  const playerHeight = (player.height * window.innerHeight) / 100;
  const ratio = window.innerWidth / window.innerHeight;
  const ballRadius = ((ball.radius * window.innerWidth) / 100) * ratio;
  const ballXLeft = ball.x - ballRadius + goTox;
  const ballXRight = ball.x + ballRadius + goTox;
  const ballYTop = ball.y - ballRadius + goToy;
  const ballYBottom = ball.y + ballRadius + goToy;
  // rebond sur les bords du canvas
  const conditionLeftBorder = ballXLeft < 0;
  const conditionRightBorder = ballXRight > window.innerWidth;
  const conditionTopBorder = ballYTop < 0;
  const conditionBottomBorder = ballYBottom > window.innerHeight - border / 100;

  if (conditionLeftBorder || conditionRightBorder) {
    if (conditionLeftBorder)
      ball.angleDirectionX = Commons.gameSpeedCollisionBorder;
    if (conditionRightBorder)
      ball.angleDirectionX = -Commons.gameSpeedCollisionBorder;
  }
  if (conditionBottomBorder || conditionTopBorder) {
    if (conditionBottomBorder) {
      // perdu
      return loseLife(player, Commons);
    }
    if (conditionTopBorder) ball.angleDirectionY = 1;
  }
  // rebond sur le joueur
  if (
    ballXRight > player.x &&
    ballXLeft < player.x + playerWidth &&
    ballYBottom > player.y &&
    ballYTop < player.y + playerHeight
  ) {
    // ball vers le haut
    ball.angleDirectionY = -1;
    const centerPlayerX = player.x + playerWidth / 2;
    if (ball.x < centerPlayerX) {
      ball.angleDirectionX = (ball.x - centerPlayerX) / (playerWidth / 2);
    } else if (ball.x > centerPlayerX) {
      ball.angleDirectionX = -(centerPlayerX - ball.x) / (playerWidth / 2);
    } else {
      ball.angleDirectionX = 0;
    }
  }

  // rebond sur les briques
  bricks.forEach((brick) => {
    const birckWidth =
      (Commons.brick[brick.id - 1].width * window.innerWidth) / 100;
    const birckHeight =
      (Commons.brick[brick.id - 1].height * window.innerHeight) / 100;
    if (
      ballXRight > brick.x &&
      ballXLeft < brick.x + birckWidth &&
      ballYBottom > brick.y &&
      ballYTop < brick.y + birckHeight
    ) {
      ball.angleDirectionY = -ball.angleDirectionY;
      tuchBrick(bricks, bricks.indexOf(brick));
    }
  });
};
export default collisionVector;
