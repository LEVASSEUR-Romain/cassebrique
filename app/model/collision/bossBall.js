import { bossLoseLife } from "../../controler/objetGlobalchange/controleurBoss.js";
import playSound from "../../controler/sound/playSound.js";
const bossBall = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //const
  const { Ball, Boss, canvasPlay } = objectGlobal;
  const BossWidth = (Boss.width * canvasPlay.width) / 100;
  const BossHeight = (Boss.height * canvasPlay.height) / 100;
  if (
    ballXRight > Boss.x &&
    ballXLeft < Boss.x + BossWidth &&
    ballYBottom > Boss.y &&
    ballYTop < Boss.y + BossHeight
  ) {
    // ball vers le haut
    Ball.angleDirectionY = 1;
    playSound(objectGlobal, "ballBoss");
    bossLoseLife(Boss);
  }
};
export default bossBall;
