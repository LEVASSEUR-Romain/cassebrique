const backgroundCanvas = (ctx, Commons) => {
  ctx.fillStyle = Commons.backgroundCanvas;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
};

export default backgroundCanvas;
