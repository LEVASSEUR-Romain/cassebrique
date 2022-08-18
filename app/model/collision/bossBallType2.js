import { bossLoseLife } from "../../controler/objetGlobalchange/controleurBoss.js";
import playSound from "../../controler/sound/playSound.js";
import controleurParticule from "../../controler/particule/controleurParticule.js";
const bossBallType2 = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //const
  const { Ball, Boss, canvasPlay, Commons } = objectGlobal;
  const BossWidth = (Boss.width * canvasPlay.width) / 100;
  const BossHeight = (Boss.height * canvasPlay.height) / 100;
  if (
    ballXRight > Boss.x &&
    ballXLeft < Boss.x + BossWidth &&
    ballYBottom > Boss.y &&
    ballYTop < Boss.y + BossHeight
  ) {
    playSound(objectGlobal, "ballBoss");
    controleurParticule(objectGlobal, Boss, "boss");
    // ball up
    Ball.angleDirectionY = -Ball.angleDirectionY;
    // axe
    //Ball.angleDirectionX = -Commons.gameSpeedCollisionBorder;
    // move placement Ball
    const conditionLeftBoss = ballXLeft < BossWidth;
    const conditionRightBoss = ballXRight > canvasPlay.width - BossWidth;

    if (conditionLeftBoss || conditionRightBoss) {
      if (conditionLeftBoss)
        Ball.angleDirectionX = Commons.gameSpeedCollisionBorder;
      if (conditionRightBoss)
        Ball.angleDirectionX = -Commons.gameSpeedCollisionBorder;
    }
    // on décale par rapport a la taille du boss
    const BallRadius = (Ball.radiusHeight * canvasPlay.height) / 100;
    const deltamove = 5;
    if (Boss.x === 0) Ball.x = BossWidth + BallRadius + deltamove;
    else Ball.x = canvasPlay.width - BossWidth - BallRadius - deltamove;

    bossLoseLife(Boss);
  }
};
export default bossBallType2;
