const drawBall = ({ ctx, Ball, canvasPlay }) => {
  const ratio = canvasPlay.width / canvasPlay.height;
  ctx.fillStyle = Ball.color;
  ctx.beginPath();
  ctx.arc(
    Ball.x,
    Ball.y,
    (Ball.radius * canvasPlay.height * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
export default drawBall;
