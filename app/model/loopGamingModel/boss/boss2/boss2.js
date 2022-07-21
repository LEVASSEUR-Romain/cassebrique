import { addBallOnArray } from "../../../../controler/objetGlobalchange/constroleurBall.js";

const boss2 = (objectGlobal) => {
  // go left and right
  const { Boss, canvasPlay, Commons } = objectGlobal;
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
  // create briks
  Boss.frame = Boss.frame === undefined ? 1 : Boss.frame + 1;
  if (Boss.frame % Boss.frameAddBall === 0) {
    // add Ball
    // create ball no lose life
    const heightBoss =
      Boss.y +
      (Boss.height * canvasPlay.height) / 100 +
      (Boss.borderHeightSpamBall * canvasPlay.height) / 100 +
      (Commons.BallDefault.radiusHeight * canvasPlay.height) / 100;
    // boss lose life
    Boss.life -= 1;
    addBallOnArray(objectGlobal, Boss.x, heightBoss, 0, 1);
  }
};
export default boss2;
