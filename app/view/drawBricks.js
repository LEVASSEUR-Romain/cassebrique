const drawBricks = (ctx, arrayObjBricks, Commons) => {
  const border = (Commons.borderMenu * window.innerHeight) / 100;
  arrayObjBricks.forEach((element) => {
    ctx.fillStyle = Commons.brick[element.id - 1].color[element.life - 1];
    ctx.fillRect(
      element.x,
      element.y,
      (Commons.brick[element.id - 1].width * window.innerWidth) / 100,
      (Commons.brick[element.id - 1].height * (window.innerHeight - border)) /
        100
    );
  });
};

export default drawBricks;
