import commonsBoss from "./commonsBoss.js";
const boss1 = ({ Player, Boss, Shoot, Commons }) => {
  const CommonsBoss = commonsBoss.boss1;
  const goToPosition =
    (CommonsBoss.speed * Player.speed * window.innerWidth) / 100;
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  // move boss
  if (Player.x > Boss.x) {
    Boss.x += goToPosition;
  } else {
    Boss.x -= goToPosition;
  }
  //shoot x frame modulo
  if (Boss.frame % CommonsBoss.frameShoot) {
    Shoot.push({
      px: (CommonsBoss.width * window.innerWidth) / 100 / 2,
      py: (CommonsBoss.height * (winndow.innerHeigth - border)) / 100,
      width: CommonsBoss.shootWidth,
      heigth: CommonsBoss.shootHeigth,
      color: CommonsBoss.shootColor,
      type: "shoot1",
    });
  }
};
export default boss1;
