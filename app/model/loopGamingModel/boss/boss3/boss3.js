import { addBallOnArray } from "../../../../controler/objetGlobalchange/constroleurBall.js";

const boss3 = (objectGlobal) => {
  const { Boss, canvasPlay, Commons } = objectGlobal;
  const speedBoss = (Boss.speed * canvasPlay.width) / 100;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  const maxBottom =
    canvasPlay.height - (Boss.borderMaxBottom * canvasPlay.height) / 100;
  const positionPlayerMaxBottom = maxBottom - bossHeight;
  const borderTop = 0;
  const positionXLeft = canvasPlay.height - bossWidth;
  const positionXRight = 0;
  if (Boss.y === 0) Boss.y = positionPlayerMaxBottom;

  // move boss
  switch (Boss.move) {
    case "upRight":
      Boss.y -= speedBoss;
      Boss.x = positionXRight;
      if (Boss.y <= borderTop) {
        Boss.move = "downLeft";
      }
      break;
    case "downRight":
      Boss.y += speedBoss;
      Boss.x = positionXRight;
      if (Boss.y >= positionPlayerMaxBottom) {
        Boss.move = "upRight";
      }
      break;
    case "upLeft":
      Boss.x = positionXLeft;
      Boss.y -= speedBoss;
      if (Boss.y <= borderTop) {
        Boss.move = "downRight";
      }
      break;
    case "downLeft":
      Boss.x = positionXLeft;
      Boss.y += speedBoss;
      if (Boss.y >= positionPlayerMaxBottom) {
        Boss.move = "upLeft";
      }
      break;
  }
  // create Bomb
  /*   Boss.frame = Boss.frame === undefined ? 1 : Boss.frame + 1;
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
  } */
};
export default boss3;
