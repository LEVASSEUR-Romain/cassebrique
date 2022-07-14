import mapClickEventMount from "./map/mapClickEventMount.js";
import clickMenu from "./clickMenu.js";
import positionInLevelBrick from "../model/positionInLevelBrick.js";

const clickMap = (e, objectGlobal) => {
  // destructuring
  const { canvasPlay, canvasMap, Player, itemMapPosition, Commons } =
    objectGlobal;
  const elementClickDifficulty = mapClickEventMount(
    e,
    itemMapPosition,
    Commons,
    Player
  );
  if (elementClickDifficulty != false) {
    //rooting
    clickMenu("play", objectGlobal.start, canvasPlay, canvasMap, Player);
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
};

export default clickMap;
