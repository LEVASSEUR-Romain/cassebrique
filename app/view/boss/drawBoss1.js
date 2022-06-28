import commonsBoss from "../../model/boss/boss1.js";
const drawBoss1 = (ctx, Boss) => {
  const CommonsBoss = commonsBoss.boss1;
  ctx.fillStyle = CommonsBoss.color;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  const ratio = window.innerWidth / window.innerHeight;
  ctx.fillRect(
    Boss.x,
    Boss.y,
    (CommonsBoss.width * window.innerWidth) / 100,
    (CommonsBoss.height * (window.innerHeight - border)) / 100
  );
};
export default drawBoss1;
