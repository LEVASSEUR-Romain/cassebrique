import mapClickEventMount from "../map/mapClickEventMount.js";
import routing from "../routing.js";
import makeCreateLvl from "./makeCreateLvl.js";
import composantCampFire from "../../view/map/modal/composantCampFire.js";
import onModalCampFire from "../eventListener/modal/onModalCampFire.js";
const clickMapCheck = (e, objectGlobal) => {
  // destructuring
  const { canvasPlay, canvasMap } = objectGlobal;
  const elementClick = mapClickEventMount(e, objectGlobal);
  if (elementClick !== false) {
    if (elementClick.type === "camp") {
      //modal camp fire
      // view
      composantCampFire(objectGlobal);
      //event
      onModalCampFire(objectGlobal);
    } else {
      makeCreateLvl(objectGlobal, elementClick.difficulty);
      //rooting
      routing("play", canvasPlay, canvasMap);
    }
  }
};

export default clickMapCheck;
