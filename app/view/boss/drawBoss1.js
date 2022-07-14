const drawBoss1 = (ctx, Boss, Commons) => {
  ctx.fillStyle = Boss.color;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  //const ratio = window.innerWidth / window.innerHeight;
  ctx.fillRect(
    Boss.x,
    Boss.y,
    (Boss.width * window.innerWidth) / 100,
    (Boss.height * (window.innerHeight - border)) / 100
  );
};
export default drawBoss1;
