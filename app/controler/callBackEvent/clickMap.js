import mapClickEventMount from "../map/mapClickEventMount.js";
import positionInLevelBrick from "../../model/positionInLevelBrick.js";
import routing from "../routing.js";
import drawAll from "../../view/drawAll.js";
import { addListDraw } from "../objetGlobalchange/controleurListDraw.js";
const clickMap = (e, objectGlobal) => {
  // destructuring
  const { canvasPlay, canvasMap, Commons } = objectGlobal;
  const elementClickDifficulty = mapClickEventMount(e, objectGlobal);
  if (elementClickDifficulty != false) {
    //rooting
    routing("play", canvasPlay, canvasMap);
  }
  // create level
  objectGlobal.leveling = [
    {
      bricks: 1,
      numberBricks: 1,
    },
  ];
  //leveling = generateMapByDiffucult(elementClickDifficulty);
  objectGlobal.Briks = positionInLevelBrick(objectGlobal.leveling, Commons);
  // ajouter defaut
  addListDraw(objectGlobal, "gameDefault");
  //draw
  drawAll(objectGlobal);
};

export default clickMap;
