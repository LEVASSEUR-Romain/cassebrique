import { bossLoseLife } from "../../controler/objetGlobalchange/controleurBoss.js";

const bossBallType2 = (
  { Ball, Boss, canvasPlay, Commons },
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //const
  const BossWidth = (Boss.width * canvasPlay.width) / 100;
  const BossHeight = (Boss.height * canvasPlay.height) / 100;
  if (
    ballXRight > Boss.x &&
    ballXLeft < Boss.x + BossWidth &&
    ballYBottom > Boss.y &&
    ballYTop < Boss.y + BossHeight
  ) {
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
