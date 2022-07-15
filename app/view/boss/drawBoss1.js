const drawBoss1 = ({ ctx, Boss, canvasPlay }) => {
  ctx.fillStyle = Boss.color;
  ctx.fillRect(
    Boss.x,
    Boss.y,
    (Boss.width * canvasPlay.width) / 100,
    (Boss.height * canvasPlay.heigt) / 100
  );
};
export default drawBoss1;
