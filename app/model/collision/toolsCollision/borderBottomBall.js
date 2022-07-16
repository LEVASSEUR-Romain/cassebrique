const borderBottomBall = ({ canvasPlay, Ball }) => {
  const ratio = canvasPlay.width / canvasPlay.height;
  const ballRadius = ((Ball.radius * canvasPlay.width) / 100) * ratio;
  const ballYBottom = Ball.y + ballRadius;
  const conditionBottomBorder = ballYBottom > canvasPlay.height;
  if (conditionBottomBorder) {
    return true;
  }
  return false;
};
export default borderBottomBall;
