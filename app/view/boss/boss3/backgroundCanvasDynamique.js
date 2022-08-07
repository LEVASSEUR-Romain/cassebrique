import {
  isBombFire,
  isBombAnimation,
} from "../../../controler/objetGlobalchange/controleurBomb.js";

const backgroundCanvasDynamique = (objectGlobal) => {
  const { Bomb, ctx, canvasPlay, Boss } = objectGlobal;
  if (objectGlobal.hasOwnProperty("Bomb")) {
    if (isBombAnimation(objectGlobal) && !isBombFire(objectGlobal)) {
      ctx.fillStyle = Boss.colorAnimation;
      ctx.fillRect(Bomb.x, 0, Bomb.width, canvasPlay.height);
    } else if (isBombFire(objectGlobal)) {
      ctx.fillStyle = Boss.colorAnimationFire;
      ctx.fillRect(Bomb.x, 0, Bomb.width, canvasPlay.height);
    }
  }
};
export default backgroundCanvasDynamique;
