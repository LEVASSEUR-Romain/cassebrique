const borderBottomBall = ({ canvasPlay, Ball }) => {
  // ALERT ICI
  //const ratio = canvasPlay.width / canvasPlay.height;
  //const ballRadius = ((Ball.radius * canvasPlay.height) / 100) * ratio;
  const ballRadius = (Ball.radiusHeight * canvasPlay.height) / 100;
  const ballYBottom = Ball.y + ballRadius;
  const conditionBottomBorder = ballYBottom > canvasPlay.height;
  if (conditionBottomBorder) {
    return true;
  }
  return false;
};
export default borderBottomBall;
