import backgroundCanvas from "./backgroundCanvas.js";
import drawPlayer from "./drawPlayer.js";
import drawBall from "./drawBall.js";
import drawBricks from "./drawBricks.js";
import drawMapItem from "./map/drawMapItem.js";
import drawLinksItem from "./map/drawLinksItem.js";
import drawBackgroundMap from "./map/drawBackgroundMap.js";
import drawPlayerOnMap from "./map/drawPlayerOnMap.js";

const drawAll = ({
  ctx,
  ctxMap,
  Player,
  Ball,
  Commons,
  itemMapLinks,
  itemMapPosition,
  Briks,
}) => {
  //Player ball bricks
  if (Briks) {
    backgroundCanvas(ctx, Commons);
    drawPlayer(ctx, Player, Commons);
    drawBall(ctx, Ball, Commons);
    drawBricks(ctx, Briks, Commons);
  }
  // map
  drawBackgroundMap(ctxMap, Commons);
  drawLinksItem(ctxMap, itemMapLinks, Commons);
  drawMapItem(ctxMap, itemMapPosition, Commons);
  drawPlayerOnMap(ctxMap, Player, Commons);
  // boss
};
export default drawAll;
