import mapClickEventMount from "../map/mapClickEventMount.js";
import routing from "../main/routing.js";
import makeCreateLvl from "./makeCreateLvl.js";
import composantCampFire from "../../view/map/modal/composantCampFire.js";
import onModalCampFire from "../eventListener/modal/onModalCampFire.js";
import controlerBoss from "./../boss/controlerBoss.js";
import drawAll from "../../view/drawAll.js";
const clickMapCheck = (e, objectGlobal) => {
  const { canvasPlay, canvasMap } = objectGlobal;
  const elementClick = mapClickEventMount(e, objectGlobal);
  if (elementClick !== false) {
    if (elementClick.type === "camp") {
      composantCampFire(objectGlobal);
      onModalCampFire(objectGlobal);
    } else if (elementClick.type === "boss") {
      controlerBoss(objectGlobal, elementClick.difficulty);
      routing("play", canvasPlay, canvasMap);
    } else {
      makeCreateLvl(objectGlobal, elementClick.difficulty);
      routing("play", canvasPlay, canvasMap);
    }
    // redraw map for refrech
    drawAll(objectGlobal);
  }
};

export default clickMapCheck;
