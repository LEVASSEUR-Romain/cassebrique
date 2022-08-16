import getHtmlCollectionImg from "./../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBall = (objectGlobal, targetBall = null) => {
  let ballX, ballY, ballRadius;
  if (targetBall === null) {
    ballX = objectGlobal.Ball.x;
    ballY = objectGlobal.Ball.y;
    ballRadius = objectGlobal.Ball.radiusHeight;
  } else {
    ballX = targetBall.x;
    ballY = targetBall.y;
    ballRadius = targetBall.radiusHeight;
  }
  const { ctx, canvasPlay } = objectGlobal;
  //ctx.fillStyle = Ball.color;
  const radius = (ballRadius * canvasPlay.height) / 100;
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "ball"),
    ballX - radius,
    ballY - radius,
    radius * 2,
    radius * 2
  );

  /*   ctx.save();
  ctx.beginPath();
  ctx.arc(Ball.x, Ball.y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  // image ball
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "ball"),
    0,
    0,
    radius * 2,
    radius * 2
  );
  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
  ctx.clip();
  ctx.closePath();
  ctx.restore(); */

  /*  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(ballX, ballY, (ballRadius * canvasPlay.height) / 100, 0, Math.PI * 2);
  ctx.fill(); */
};
export default drawBall;
