const moveBall = ({ Ball, canvasPlay }) => {
  Ball.x += ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionX;
  Ball.y += ((Ball.speed * canvasPlay.height) / 100) * Ball.angleDirectionY;
};
export default moveBall;
