import bossBall from "../bossBall.js";
import objectUpBottomLeftRightBall from "../toolsCollision/objectUpBottomLeftRightBall.js";
const bossAllBall = (objectGlobal) => {
  //destructuring
  const { Ball, canvasPlay, Boss, htmlCollectionSound } = objectGlobal;
  Ball.forEach((element) => {
    // tchek other borderBottomBall
    const { ballXLeft, ballXRight, ballYTop, ballYBottom } =
      objectUpBottomLeftRightBall(element, canvasPlay);
    // send pointer
    /*     const send = {
      Boss: Boss,
      canvasPlay: canvasPlay,
      Ball: element,
      htmlCollectionSound: htmlCollectionSound,
    }; */
    bossBall(
      objectGlobal,
      ballXLeft,
      ballXRight,
      ballYTop,
      ballYBottom,
      element
    );
  });
};
export default bossAllBall;
