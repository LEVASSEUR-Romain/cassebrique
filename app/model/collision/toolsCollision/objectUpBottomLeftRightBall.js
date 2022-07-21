const objectUpBottomLeftRightBall = (Ball, canvasPlay) => {
  const ballRadius = (Ball.radiusHeight * canvasPlay.height) / 100;
  const ballXLeft = Ball.x - ballRadius;
  const ballXRight = parseInt(Ball.x + ballRadius);
  const ballYTop = Ball.y - ballRadius;
  const ballYBottom = parseInt(Ball.y + ballRadius);
  return {
    ballXLeft: ballXLeft,
    ballXRight: ballXRight,
    ballYTop: ballYTop,
    ballYBottom: ballYBottom,
  };
};
export default objectUpBottomLeftRightBall;
