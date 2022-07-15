import loopGaming from "./loopGaming.js";
import { listCollisionDefault } from "./../model/listLoop/listCollision.js";
import { listEventDefault } from "../model/listLoop/listEvent.js";

const sendLoopingGaming = (objectGlobal, type = "") => {
  switch (type) {
    default:
      loopGaming(objectGlobal, listEventDefault, listCollisionDefault);
      break;
  }
};
export default sendLoopingGaming;
