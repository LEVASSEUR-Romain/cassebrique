const moveAllBall = ({ Ball, canvasPlay }) => {
  Ball.forEach((element) => {
    element.x +=
      ((element.speed * canvasPlay.height) / 100) * element.angleDirectionX;
    element.y +=
      ((element.speed * canvasPlay.height) / 100) * element.angleDirectionY;
  });
};
export default moveAllBall;
