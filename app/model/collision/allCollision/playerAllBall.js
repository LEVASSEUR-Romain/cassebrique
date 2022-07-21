import playerBall from "./../playerBall.js";
import objectUpBottomLeftRightBall from "../toolsCollision/objectUpBottomLeftRightBall.js";
const playerAllBall = (objectGlobal) => {
  //destructuring
  const { Ball, canvasPlay, Player } = objectGlobal;
  Ball.forEach((element) => {
    // tchek other borderBottomBall
    const { ballXLeft, ballXRight, ballYTop, ballYBottom } =
      objectUpBottomLeftRightBall(element, canvasPlay);
    // send pointer
    const send = {
      Player: Player,
      canvasPlay: canvasPlay,
      Ball: element,
    };
    playerBall(send, ballXLeft, ballXRight, ballYTop, ballYBottom);
  });
};
export default playerAllBall;
