const drawBricks = ({ ctx, Briks, Commons, canvasPlay }) => {
  Briks.forEach((element) => {
    ctx.fillStyle = Commons.brick[element.id - 1].color[element.life - 1];
    ctx.fillRect(
      element.x,
      element.y,
      (Commons.brick[element.id - 1].width * canvasPlay.width) / 100,
      (Commons.brick[element.id - 1].height * canvasPlay.height) / 100
    );
  });
};

export default drawBricks;
