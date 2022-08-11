// map
// traitement in model for all draw map item
import drawAllMapItem from "../map/drawAllMapItem.js";
import drawLinksItem from "../../view/map/drawLinksItem.js";
import drawBackgroundMap from "../../view/map/drawBackgroundMap.js";
import drawPlayerOnMap from "../../view/map/drawPlayerOnMap.js";
import drawInterrogationPoint from "../../view/map/drawInterrogationPoint.js";
// warning order
export const listMap = [
  drawBackgroundMap,
  drawLinksItem,
  drawAllMapItem,
  drawInterrogationPoint,
  drawPlayerOnMap,
];

// gaming default with bricks
import backgroundCanvas from "../../view/zoneplay/backgroundCanvas.js";
import drawPlayer from "../../view/zoneplay/drawPlayer.js";
import drawBall from "../../view/zoneplay/drawBall.js";
import drawBricks from "../../view/zoneplay/drawBricks.js";

export const ListGamingMin = [backgroundCanvas, drawPlayer, drawBall];

// warning order
export const listGameDefault = ListGamingMin.concat(drawBricks);

// Boss 1 => shooter boss
import drawBoss1 from "../../view/boss/boss1/drawBoss1.js";
import drawShoot from "../../view/boss/boss1/drawShoot.js";
export const listBoss1 = ListGamingMin.concat(drawBoss1, drawShoot);

//boss 2 => create bricks
import drawBoss2 from "../../view/boss/boss2/drawBoss2.js";
import drawMultiBall from "../../view/boss/boss2/drawMultiBall.js";
export const listBoss2 = [
  backgroundCanvas,
  drawPlayer,
  drawBoss2,
  drawMultiBall,
];

//boss 3 => bomb boss
import backgroundCanvasDynamique from "../../view/boss/boss3/backgroundCanvasDynamique.js";
import drawBoss3 from "../../view/boss/boss3/drawBoss3.js";
export const listBoss3 = [
  backgroundCanvas,
  backgroundCanvasDynamique,
  drawPlayer,
  drawBoss3,
  drawBall,
];
