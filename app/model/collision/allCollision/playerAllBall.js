import playerBall from "./../playerBall.js";
import objectUpBottomLeftRightBall from "../toolsCollision/objectUpBottomLeftRightBall.js";
const playerAllBall = (objectGlobal) => {
  //destructuring
  const { Ball, canvasPlay, Player, htmlCollectionSound } = objectGlobal;
  Ball.forEach((element) => {
    // tchek other borderBottomBall
    const { ballXLeft, ballXRight, ballYTop, ballYBottom } =
      objectUpBottomLeftRightBall(element, canvasPlay);
    // send pointer
    /*     const send = {
      Player: Player,
      canvasPlay: canvasPlay,
      Ball: element,
      htmlCollectionSound: htmlCollectionSound,
    }; */
    playerBall(
      objectGlobal,
      ballXLeft,
      ballXRight,
      ballYTop,
      ballYBottom,
      element
    );
  });
};
export default playerAllBall;
