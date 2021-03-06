const drawBoss1 = ({ ctx, Boss, canvasPlay }) => {
  ctx.fillStyle = Boss.color;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  ctx.fillRect(Boss.x, Boss.y, bossWidth, bossHeight);
  // zone mitrailler
  ctx.fillStyle = Boss.colorShooter;
  const shooterWidht = (Boss.widthShooter * canvasPlay.width) / 100;
  const shooterHeight = (Boss.heightShooter * canvasPlay.height) / 100;
  ctx.fillRect(
    Boss.x + bossWidth / 2 - shooterWidht / 2,
    Boss.y + bossHeight - shooterHeight,
    shooterWidht,
    shooterHeight
  );
  // zone de vie
  ctx.font = shooterHeight + "px Calibri,Geneva,Arial";
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.strokeText(Boss.life.toString(), Boss.x, Boss.y + shooterHeight);
};
export default drawBoss1;
