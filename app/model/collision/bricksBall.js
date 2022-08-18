import tuchBrick from "./toolsCollision/tuchBrick.js";
import playSound from "../../controler/sound/playSound.js";
import controleurParticule from "../../controler/particule/controleurParticule.js";
const bricksBall = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  const { Briks, Ball, Commons, canvasPlay } = objectGlobal;
  Briks.forEach((brick) => {
    const birckWidth =
      (Commons.brick[brick.id - 1].width * canvasPlay.width) / 100;
    const birckHeight =
      (Commons.brick[brick.id - 1].height * canvasPlay.height) / 100;
    if (
      ballXRight > brick.x &&
      ballXLeft < brick.x + birckWidth &&
      ballYBottom > brick.y &&
      ballYTop < brick.y + birckHeight
    ) {
      playSound(objectGlobal, "ballBrik");
      controleurParticule(objectGlobal, brick, "brik");
      Ball.angleDirectionY = -Ball.angleDirectionY;
      tuchBrick(Briks, Briks.indexOf(brick));
    }
  });
};
export default bricksBall;
