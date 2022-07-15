import loseLife from "../loseLife.js";

const borderBall = (
  { Ball, Player, Commons },
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const conditionLeftBorder = ballXLeft < 0;
  const conditionRightBorder = ballXRight > window.innerWidth;
  const conditionTopBorder = ballYTop < 0;
  const conditionBottomBorder = ballYBottom > window.innerHeight - border / 100;

  if (conditionLeftBorder || conditionRightBorder) {
    if (conditionLeftBorder)
      Ball.angleDirectionX = Commons.gameSpeedCollisionBorder;
    if (conditionRightBorder)
      Ball.angleDirectionX = -Commons.gameSpeedCollisionBorder;
  }
  if (conditionBottomBorder || conditionTopBorder) {
    if (conditionBottomBorder) {
      // perdu
      return loseLife(Player, Commons);
    }
    if (conditionTopBorder) Ball.angleDirectionY = 1;
  }
};
export default borderBall;
