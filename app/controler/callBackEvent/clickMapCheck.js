import mapClickEventMount from "../map/mapClickEventMount.js";
import routing from "../main/routing.js";
import makeCreateLvl from "./makeCreateLvl.js";
import composantCampFire from "../../view/map/modal/composantCampFire.js";
import onModalCampFire from "../eventListener/modal/onModalCampFire.js";
import onModalInterrogation from "../eventListener/modal/onModalInterrogation.js";
import controlerBoss from "./../boss/controlerBoss.js";
import isMapClickEventInterrogation from "../map/isMapClickEventInterrogation.js";
import drawAllMap from "../../view/drawAllMap.js";
import composantInterrogation from "../../view/map/modal/composantInterrogation.js";
import setLastClickLvl from "./../objetGlobalchange/setLastClickLvl.js";
const clickMapCheck = (e, objectGlobal) => {
  const { canvasPlay, canvasMap, itemMapInterrogation } = objectGlobal;

  if (!isMapClickEventInterrogation(e, objectGlobal)) {
    const elementClick = mapClickEventMount(e, objectGlobal);
    if (elementClick !== false) {
      if (elementClick.type === "camp") {
        // no combat
        setLastClickLvl(objectGlobal, false);
        composantCampFire(objectGlobal);
        onModalCampFire(objectGlobal);
      } else if (elementClick.type === "boss") {
        controlerBoss(objectGlobal, elementClick.difficulty);
        routing("play", canvasPlay, canvasMap);
      } else {
        makeCreateLvl(objectGlobal, elementClick.difficulty);
        routing("play", canvasPlay, canvasMap);
      }
      // redraw map for change position player
      drawAllMap(objectGlobal);
    }
  } else {
    composantInterrogation(objectGlobal);
    onModalInterrogation();
  }
};

export default clickMapCheck;
