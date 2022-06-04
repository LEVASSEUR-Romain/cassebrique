const drawBricks = (ctx, arrayObjBricks, Commons) => {
  arrayObjBricks.forEach((element) => {
    ctx.fillStyle = Commons.brick[element.id - 1].color[element.life - 1];
    ctx.fillRect(
      element.x,
      element.y,
      Commons.brick[element.id - 1].width,
      Commons.brick[element.id - 1].height
    );
  });
};

export default drawBricks;
