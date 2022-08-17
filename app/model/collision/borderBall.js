import { playerLoseLife } from "../../controler/objetGlobalchange/controleurPlayer.js";
import setLoseBall from "../../controler/objetGlobalchange/setLoseBall.js";
import playSound from "../../controler/sound/playSound.js";
const borderBall = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  // if change look boderAndBallAndDelete
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
    playSound(objectGlobal, "ballWall");
  }
  if (conditionBottomBorder || conditionTopBorder) {
    if (conditionBottomBorder) {
      // perdu
      setLoseBall(objectGlobal, true);
      return playerLoseLife(objectGlobal);
    }
    if (conditionTopBorder) Ball.angleDirectionY = 1;
  }
};
export default borderBall;
