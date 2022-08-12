import drawAll from "../../view/drawAll.js";
import positionInLevelBrick from "../../model/briksCreator/positionInLevelBrick.js";
import generateMapByDiffucult from "./../../model/map/generateMapByDiffucult.js";
import { addListDraw } from "../objetGlobalchange/controleurListDraw.js";
import { setPositionDefaultPlayer } from "../objetGlobalchange/controleurPlayer.js";
import setPositionDefaultBall from "../objetGlobalchange/setPositionDefaultBall.js";
import { removeAllDraw } from "../objetGlobalchange/controleurListDraw.js";
const makeCreateLvl = (objectGlobal, difficult) => {
  // create level
  //deBug
  objectGlobal.leveling = [
    {
      bricks: 1,
      numberBricks: 1,
    },
  ];
  // objectGlobal.leveling = generateMapByDiffucult(difficult);
  objectGlobal.Briks = positionInLevelBrick(
    objectGlobal.leveling,
    objectGlobal.Commons
  );
  // make default Ball Player
  setPositionDefaultPlayer(objectGlobal);
  setPositionDefaultBall(objectGlobal);
  // change list draw
  removeAllDraw(objectGlobal);
  addListDraw(objectGlobal, "gameDefault");
  //draw
  drawAll(objectGlobal);
};
export default makeCreateLvl;
