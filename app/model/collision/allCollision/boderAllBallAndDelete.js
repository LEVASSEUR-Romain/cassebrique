import { playerLoseLife } from "../../../controler/objetGlobalchange/controleurPlayer.js";
import objectUpBottomLeftRightBall from "../toolsCollision/objectUpBottomLeftRightBall.js";
import { deleteBallOnArray } from "../../../controler/objetGlobalchange/constroleurBall.js";
import playSound from "../../../controler/sound/playSound.js";
const boderAllBallAndDelete = (objectGlobal) => {
  //destructuring
  const { Ball, canvasPlay, Commons, Player } = objectGlobal;
  Ball.forEach((element) => {
    const { ballXLeft, ballXRight, ballYTop, ballYBottom } =
      objectUpBottomLeftRightBall(element, canvasPlay);
    const conditionLeftBorder = ballXLeft < 0;
    const conditionRightBorder = ballXRight > canvasPlay.width;
    const conditionTopBorder = ballYTop < 0;
    const conditionBottomBorder = ballYBottom > canvasPlay.height;

    if (conditionLeftBorder || conditionRightBorder) {
      if (conditionLeftBorder)
        element.angleDirectionX = Commons.gameSpeedCollisionBorder;
      if (conditionRightBorder)
        element.angleDirectionX = -Commons.gameSpeedCollisionBorder;
      playSound(objectGlobal, "ballWall");
    }
    if (conditionBottomBorder || conditionTopBorder) {
      if (conditionBottomBorder) {
        // delete la boule
        deleteBallOnArray(objectGlobal, element);
        // perdu
        return playerLoseLife(objectGlobal);
      }
      if (conditionTopBorder) element.angleDirectionY = 1;
    }
  });
};
export default boderAllBallAndDelete;
