import tuchBrick from "../model/tuchBrick.js";
import loseLife from "../model/loseLife.js";
const collisionVector = (player, bricks, ball, Commons) => {
  // const
  const goTox = ball.speed * ball.angleDirectionX;
  const goToy = ball.speed * ball.angleDirectionY;
  const ballXLeft = ball.x - ball.radius + goTox;
  const ballXRight = ball.x + ball.radius + goTox;
  const ballYTop = ball.y - ball.radius + goToy;
  const ballYBottom = ball.y + ball.radius + goToy;
  // rebond sur les bords du canvas
  const conditionLeftBorder = ballXLeft < 0;
  const conditionRightBorder = ballXRight > Commons.canvasWidth;
  const conditionTopBorder = ballYTop < 0;
  const conditionBottomBorder = ballYBottom > Commons.canvasHeight;
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
    ballXLeft < player.x + player.width &&
    ballYBottom > player.y &&
    ballYTop < player.y + player.height
  ) {
    // ball vers le haut
    ball.angleDirectionY = -1;
    const centerPlayerX = player.x + player.width / 2;
    if (ball.x < centerPlayerX) {
      ball.angleDirectionX = (ball.x - centerPlayerX) / (player.width / 2);
    } else if (ball.x > centerPlayerX) {
      ball.angleDirectionX = -(centerPlayerX - ball.x) / (player.width / 2);
    } else {
      ball.angleDirectionX = 0;
    }
  }

  // rebond sur les briques
  bricks.forEach((brick) => {
    if (
      ballXRight > brick.x &&
      ballXLeft < brick.x + Commons.brick[brick.id - 1].width &&
      ballYBottom > brick.y &&
      ballYTop < brick.y + Commons.brick[brick.id - 1].height
    ) {
      ball.angleDirectionY = -ball.angleDirectionY;
      tuchBrick(bricks, bricks.indexOf(brick));
    }
  });
};
export default collisionVector;
