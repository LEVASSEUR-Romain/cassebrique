const drawBoss3 = ({ ctx, Boss, canvasPlay }) => {
  ctx.fillStyle = Boss.color;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  ctx.fillRect(Boss.x, Boss.y, bossWidth, bossHeight);
  // zone de vie
  ctx.font = bossWidth + "px Calibri,Geneva,Arial";
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.strokeText(Boss.life.toString(), Boss.x, Boss.y + bossHeight - 2);
};
export default drawBoss3;
