import { addBallOnArray } from "../../../../controler/objetGlobalchange/constroleurBall.js";
import playSound from "../../../../controler/sound/playSound.js";
const boss2 = (objectGlobal) => {
  // go left and right
  const { Boss, canvasPlay, Commons, Ball } = objectGlobal;
  const speedBoss = (Boss.speed * canvasPlay.width) / 100;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  if (Boss.move === "left") {
    Boss.x += speedBoss;
    if (Boss.x + bossWidth >= canvasPlay.width) {
      Boss.move = "right";
    }
  } else if (Boss.move === "right") {
    Boss.x -= speedBoss;
    if (Boss.x <= 0) {
      Boss.move = "left";
    }
  }
  // create Ball
  Boss.frame = Boss.frame === undefined ? 1 : Boss.frame + 1;
  if (Boss.frame % Boss.frameAddBall === 0 && Ball.length < Boss.maxBall) {
    // add Ball
    // create ball no lose life
    const heightBoss =
      Boss.y +
      (Boss.height * canvasPlay.height) / 100 +
      (Boss.borderHeightSpamBall * canvasPlay.height) / 100 +
      (Commons.BallDefault.radiusHeight * canvasPlay.height) / 100;
    //bossLoseLife(Boss);
    playSound(objectGlobal, "boss2Ball");
    addBallOnArray(objectGlobal, Boss.x + bossWidth / 2, heightBoss, 0, 1);
  }
};
export default boss2;
