const boss1 = ({ Player, Boss, Shoot, canvasPlay }) => {
  const goToPosition = (Boss.speed * canvasPlay.width) / 100;
  // move boss
  if (Player.x > Boss.x) {
    Boss.x += goToPosition;
  } else {
    Boss.x -= goToPosition;
  }
  //shoot x frame modulo
  if (Boss.frame % Boss.frameShoot) {
    Shoot.push({
      px: (Boss.width * canvasPlay.width) / 100 / 2,
      py: (Boss.height * canvasPlay.height) / 100,
      width: Boss.shootWidth,
      heigth: Boss.shootHeigth,
      color: Boss.shootColor,
      speed: shootSpeed,
      type: "shoot1",
    });
  }
};
export default boss1;
