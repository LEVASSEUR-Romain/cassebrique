import { bossLoseLife } from "../../controler/objetGlobalchange/controleurBoss.js";

const bossBall = (
  { Ball, Boss, canvasPlay },
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
    // ball vers le haut
    Ball.angleDirectionY = -1;
    bossLoseLife(Boss);
  }
};
export default bossBall;
