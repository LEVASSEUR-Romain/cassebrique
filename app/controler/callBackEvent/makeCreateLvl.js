import drawAll from "../../view/drawAll.js";
import positionInLevelBrick from "../../model/positionInLevelBrick.js";
import generateMapByDiffucult from "./../../model/map/generateMapByDiffucult.js";
import { addListDraw } from "../objetGlobalchange/controleurListDraw.js";
import setPositionDefaultPlayer from "../objetGlobalchange/setPositionDefaultPlayer.js";
import setPositionDefaultBall from "../objetGlobalchange/setPositionDefaultBall.js";

const makeCreateLvl = (objectGlobal) => {
  // create level
  objectGlobal.leveling = [
    {
      bricks: 1,
      numberBricks: 1,
    },
  ];
  //leveling = generateMapByDiffucult(elementClickDifficulty);
  objectGlobal.Briks = positionInLevelBrick(
    objectGlobal.leveling,
    objectGlobal.Commons
  );
  // ajouter defaut
  addListDraw(objectGlobal, "gameDefault");
  // make default Ball Player
  setPositionDefaultPlayer(objectGlobal);
  setPositionDefaultBall(objectGlobal);
  //draw
  drawAll(objectGlobal);
};
export default makeCreateLvl;
