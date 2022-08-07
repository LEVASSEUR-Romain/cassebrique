import mainCollision from "./mainCollision.js";
// vue
import drawAll from "../../view/drawAll.js";

const loopGaming = (objectGlobal, listEvent, listCollision) => {
  //collision
  mainCollision(objectGlobal, listCollision);
  // event
  listEvent.forEach((event) => {
    //exception
    switch (event.length) {
      case 3:
        //reboucle
        event(objectGlobal, listEvent, listCollision);
        break;
      default:
        event(objectGlobal);
        break;
    }
  });

  //draw
  drawAll(objectGlobal);
};
export default loopGaming;
