const drawShoot = ({ ctx, Shoot, Boss, canvasPlay }) => {
  Shoot.forEach((shoot) => {
    ctx.fillStyle = Boss.shootColor;
    ctx.fillRect(
      shoot.x,
      shoot.y,
      (shoot.width * canvasPlay.width) / 100,
      (shoot.height * canvasPlay.height) / 100
    );
  });
};
export default drawShoot;
