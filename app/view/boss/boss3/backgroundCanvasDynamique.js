import {
  isBombFire,
  isBombAnimation,
} from "../../../controler/objetGlobalchange/controleurBomb.js";
import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const backgroundCanvasDynamique = (objectGlobal) => {
  const { Bomb, ctx, canvasPlay, Boss } = objectGlobal;
  if (objectGlobal.hasOwnProperty("Bomb")) {
    if (isBombAnimation(objectGlobal) && !isBombFire(objectGlobal)) {
      // bomb warning
      const widthWarning = (25 * Bomb.width) / 100;
      const heightWaning = (15 * canvasPlay.height) / 100;
      ctx.fillStyle = Boss.colorAnimation;
      ctx.fillRect(Bomb.x, 0, Bomb.width, canvasPlay.height);
      ctx.drawImage(
        getHtmlCollectionImg(objectGlobal, "bomb"),
        Bomb.x + Bomb.width / 2 - widthWarning / 2,
        canvasPlay.height / 2 - heightWaning,
        widthWarning,
        heightWaning
      );
      // timer
      let bossFrameMin = Boss.frame;
      while (bossFrameMin > Boss.frameBomb) {
        bossFrameMin -= Boss.frameBomb;
      }
      const time = 10 - Math.round((bossFrameMin / Boss.frameBomb) * 10);
      ctx.font = "48px serif";
      ctx.fillStyle = "black";
      ctx.fillText(
        time,
        Bomb.x + Bomb.width / 2 - widthWarning / 2,
        canvasPlay.height / 2 - heightWaning
      );
    } else if (isBombFire(objectGlobal)) {
      //fire
      ctx.fillStyle = Boss.colorAnimationFire;
      ctx.fillRect(Bomb.x, 0, Bomb.width, canvasPlay.height);
    }
  }
};
export default backgroundCanvasDynamique;
