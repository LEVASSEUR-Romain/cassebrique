const moveBall = ({ Ball }) => {
  Ball.x += ((Ball.speed * window.innerHeight) / 100) * Ball.angleDirectionX;
  Ball.y += ((Ball.speed * window.innerHeight) / 100) * Ball.angleDirectionY;
};
export default moveBall;
