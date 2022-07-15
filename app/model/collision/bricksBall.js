import tuchBrick from "../../model/tuchBrick.js";
const bricksBall = (
  { Briks, Ball, Commons },
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  Briks.forEach((brick) => {
    const birckWidth =
      (Commons.brick[brick.id - 1].width * window.innerWidth) / 100;
    const birckHeight =
      (Commons.brick[brick.id - 1].height * window.innerHeight) / 100;
    if (
      ballXRight > brick.x &&
      ballXLeft < brick.x + birckWidth &&
      ballYBottom > brick.y &&
      ballYTop < brick.y + birckHeight
    ) {
      Ball.angleDirectionY = -Ball.angleDirectionY;
      tuchBrick(Briks, Briks.indexOf(brick));
    }
  });
};
export default bricksBall;
