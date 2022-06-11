const drawBall = (ctx, ball) => {
  const ratio = window.innerWidth / window.innerHeight;
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(
    ball.x,
    ball.y,
    (ball.radius * window.innerHeight * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctx.fill();
};
export default drawBall;
