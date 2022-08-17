import getHtmlCollectionImg from "./../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBall = (objectGlobal, targetBall = null) => {
  let ballX, ballY, ballRadius, ctx, canvasPlay;
  if (targetBall === null) {
    ballX = objectGlobal.Ball.x;
    ballY = objectGlobal.Ball.y;
    ballRadius = objectGlobal.Ball.radiusHeight;
    ctx = objectGlobal.ctx;
    canvasPlay = objectGlobal.canvasPlay;
  } else {
    ballX = targetBall.x;
    ballY = targetBall.y;
    ballRadius = targetBall.radiusHeight;
    ctx = targetBall.ctx;
    canvasPlay = targetBall.canvasPlay;
  }
  const radius = (ballRadius * canvasPlay.height) / 100;
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "ball"),
    ballX - radius,
    ballY - radius,
    radius * 2,
    radius * 2
  );
};
export default drawBall;
