import mainCollision from "./mainCollision.js";
// vue
import drawAll from "./../view/drawAll.js";

const loopGaming = (objectGlobal, listEvent, listCollision) => {
  // event
  listEvent.forEach((event) => {
    //exception
    switch (event.name) {
      case "restartLoseLife":
        //reboucle
        event(objectGlobal, listEvent, listCollision);
        break;
      default:
        event(objectGlobal);
        break;
    }
  });
  //collision
  mainCollision(objectGlobal, listCollision);
  //draw
  drawAll(objectGlobal);
};
export default loopGaming;
