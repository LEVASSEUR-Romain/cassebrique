const borderBottomBall = ({ canvasPlay, Ball }) => {
  const ballRadius = (Ball.radiusHeight * canvasPlay.height) / 100;
  const ballYBottom = Ball.y + ballRadius;
  const conditionBottomBorder = ballYBottom > canvasPlay.height;
  if (conditionBottomBorder) {
    return true;
  }
  return false;
};
export default borderBottomBall;
