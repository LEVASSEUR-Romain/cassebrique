import loseLife from "../../model/loseLife.js";

const borderBall = (
  Ball,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom,
  border,
  Player,
  Commons
) => {
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
