import { loseLifeParticuleAndRemove } from "../../controler/objetGlobalchange/controleurParticule.js";

const particule = (objectGlobal) => {
  if (objectGlobal.hasOwnProperty("particule")) {
    const { canvasPlay, particule } = objectGlobal;
    loseLifeParticuleAndRemove(objectGlobal);
    // go particule
    for (let i = 0; i < particule.length; i++) {
      const element = particule[i];
      element.x +=
        ((element.speed * canvasPlay.height) / 100) * element.directionX;
      element.y +=
        ((element.speed * canvasPlay.height) / 100) * element.directionY;
    }
  }
};
export default particule;
