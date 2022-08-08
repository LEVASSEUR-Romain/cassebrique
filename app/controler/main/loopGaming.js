import mainCollision from "./mainCollision.js";
import drawAll from "../../view/drawAll.js";

const loopGaming = (objectGlobal, listEvent, listCollision) => {
  // if win or lose Start === false
  if (objectGlobal.start) {
    listEvent.forEach((event) => {
      switch (event.length) {
        case 3:
          //execption
          event(objectGlobal, listEvent, listCollision);
          break;
        default:
          event(objectGlobal);
          break;
      }
    });
    // this condition stop next step
    if (objectGlobal.start) {
      mainCollision(objectGlobal, listCollision);
      drawAll(objectGlobal);
    }
  }
};
export default loopGaming;
