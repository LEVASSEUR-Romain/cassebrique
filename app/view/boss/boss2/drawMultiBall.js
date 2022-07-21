const drawMultiBall = ({ ctx, Ball, canvasPlay }) => {
  Ball.forEach((element) => {
    ctx.fillStyle = element.color;
    ctx.beginPath();
    ctx.arc(
      element.x,
      element.y,
      (element.radiusHeight * canvasPlay.height) / 100,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
};
export default drawMultiBall;
