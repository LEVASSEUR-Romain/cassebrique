const drawBall = ({ ctx, Ball, canvasPlay }) => {
  ctx.fillStyle = Ball.color;
  ctx.beginPath();
  ctx.arc(
    Ball.x,
    Ball.y,
    (Ball.radiusHeight * canvasPlay.height) / 100,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
export default drawBall;
