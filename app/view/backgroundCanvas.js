const backgroundCanvas = (ctx, Commons) => {
  ctx.fillStyle = Commons.backgroundCanvas;
  ctx.fillRect(0, 0, Commons.canvasWidth, Commons.canvasHeight);
};

export default backgroundCanvas;
