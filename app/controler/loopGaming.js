import mainCollision from "./mainCollision.js";
// model loopGaming
import loseLife from "../model/loseLife.js";
import moveBall from "../model/loopGamingModel/moveBall.js";
import restartLoseLife from "../model/loopGamingModel/restartLoseLife.js";
import boss1 from "../model/loopGamingModel/boss/boss1.js";
// vue
import drawAll from "./../view/drawAll.js";

const loopGaming = (objectGlobal, listEvent, listCollision) => {
  //collision
  mainCollision(objectGlobal, listCollision);
  // event
  listEvent.forEach((event) => {
    //exception
    switch (event) {
      case "restartLoseLife":
        //reboucle
        window[event](objectGlobal, listEvent, listCollision);
        break;
      default:
        window[event](objectGlobal);
        break;
    }
  });
  //draw
  drawAll(objectGlobal);
};
export default loopGaming;
