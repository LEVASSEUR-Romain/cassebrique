import { bossLoseLife } from "../../controler/objetGlobalchange/controleurBoss.js";
import playSound from "../../controler/sound/playSound.js";
import controleurParticule from "../../controler/particule/controleurParticule.js";
const bossBall = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom,
  itemBall = null
) => {
  //const
  let Ball = {};
  if (itemBall === null) {
    Ball = objectGlobal.Ball;
  } else {
    Ball = itemBall;
  }
  const { Boss, canvasPlay } = objectGlobal;
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
    controleurParticule(objectGlobal, Boss, "boss");
    playSound(objectGlobal, "ballBoss");
    bossLoseLife(Boss);
  }
};
export default bossBall;
