const drawBall = (ctx, ball, Commons) => {
  const ratio = window.innerWidth / window.innerHeight;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(
    ball.x,
    ball.y,
    (ball.radius * (window.innerHeight - border) * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
export default drawBall;
