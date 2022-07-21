import loopGaming from "../main/loopGaming.js";
import {
  listCollisionDefault,
  listCollisionBoss1,
  listCollisionBoss2,
} from "../../model/listLoop/listCollision.js";
import {
  listEventDefault,
  listeEventBoss1,
  listeEventBoss2,
} from "../../model/listLoop/listEvent.js";

const sendLoopingGaming = (objectGlobal) => {
  if (objectGlobal.Boss && objectGlobal.Boss.id === "boss1")
    loopGaming(objectGlobal, listeEventBoss1, listCollisionBoss1);
  else if (objectGlobal.Boss && objectGlobal.Boss.id === "boss2")
    loopGaming(objectGlobal, listeEventBoss2, listCollisionBoss2);
  else loopGaming(objectGlobal, listEventDefault, listCollisionDefault);
};
export default sendLoopingGaming;
