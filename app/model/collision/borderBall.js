import { playerLoseLife } from "../../controler/objetGlobalchange/controleurLife.js";
const borderBall = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  const { Ball, Commons, canvasPlay } = objectGlobal;
  const conditionLeftBorder = ballXLeft < 0;
  const conditionRightBorder = ballXRight > canvasPlay.width;
  const conditionTopBorder = ballYTop < 0;
  const conditionBottomBorder = ballYBottom > canvasPlay.height;

  if (conditionLeftBorder || conditionRightBorder) {
    if (conditionLeftBorder)
      Ball.angleDirectionX = Commons.gameSpeedCollisionBorder;
    if (conditionRightBorder)
      Ball.angleDirectionX = -Commons.gameSpeedCollisionBorder;
  }
  if (conditionBottomBorder || conditionTopBorder) {
    if (conditionBottomBorder) {
      // perdu
      return playerLoseLife(objectGlobal);
    }
    if (conditionTopBorder) Ball.angleDirectionY = 1;
  }
};
export default borderBall;
