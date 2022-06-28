import commonsBoss from "../../model/boss/boss1.js";
const drawShoot = (ctx, Shoot) => {
  const CommonsBoss = commonsBoss.boss1;
  Shoot.forEach((shoot) => {
    ctx.fillStyle = CommonsBoss.shootColor;
    const border = (Commons.borderMenu * window.innerHeight) / 100;
    const ratio = window.innerWidth / window.innerHeight;
    ctx.fillRect(
      shoot.x,
      shoot.y,
      (shoot.width * window.innerWidth) / 100,
      (shoot.heigth * (window.innerHeight - border)) / 100
    );
  });
};
export default drawShoot;
