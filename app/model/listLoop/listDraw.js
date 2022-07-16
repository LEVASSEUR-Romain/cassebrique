// map
import drawMapItem from "../../view/map/drawMapItem.js";
import drawLinksItem from "../../view/map/drawLinksItem.js";
import drawBackgroundMap from "../../view/map/drawBackgroundMap.js";
import drawPlayerOnMap from "../../view/map/drawPlayerOnMap.js";
// warning order
export const listMap = [
  drawBackgroundMap,
  drawLinksItem,
  drawMapItem,
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

// Boss draw
import drawBoss1 from "../../view/boss/drawBoss1.js";
import drawShoot from "../../view/boss/drawShoot.js";
export const listBoss1 = ListGamingMin.concat(drawBoss1, drawShoot);
