const backgroundCanvas = ({ ctx, Commons, canvasPlay }) => {
  ctx.fillStyle = Commons.backgroundCanvas;
  ctx.fillRect(0, 0, canvasPlay.width, canvasPlay.height);
};

export default backgroundCanvas;
