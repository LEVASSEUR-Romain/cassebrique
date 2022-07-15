import mapClickEventMount from "../map/mapClickEventMount.js";
import routing from "../routing.js";
import makeCreateLvl from "./makeCreateLvl.js";

const clickMap = (e, objectGlobal) => {
  // destructuring
  const { canvasPlay, canvasMap, Commons } = objectGlobal;
  const elementClickDifficulty = mapClickEventMount(e, objectGlobal);
  if (elementClickDifficulty != false) {
    makeCreateLvl(objectGlobal);
    //rooting
    routing("play", canvasPlay, canvasMap);
  }
};

export default clickMap;