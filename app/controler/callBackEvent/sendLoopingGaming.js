import loopGaming from "../loopGaming.js";
import {
  listCollisionDefault,
  listCollisionBoss1,
} from "../../model/listLoop/listCollision.js";
import {
  listEventDefault,
  listeEventBoss1,
} from "../../model/listLoop/listEvent.js";

const sendLoopingGaming = (objectGlobal) => {
  if (objectGlobal.Boss && objectGlobal.Boss.id === "boss1")
    loopGaming(objectGlobal, listeEventBoss1, listCollisionBoss1);
  else loopGaming(objectGlobal, listEventDefault, listCollisionDefault);
};
export default sendLoopingGaming;
