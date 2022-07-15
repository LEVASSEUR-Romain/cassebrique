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
// warning order
export const listGameDefault = [
  backgroundCanvas,
  drawPlayer,
  drawBall,
  drawBricks,
];
