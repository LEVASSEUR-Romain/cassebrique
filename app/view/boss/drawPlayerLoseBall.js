import backgroundCanvas from "../zoneplay/backgroundCanvas.js";
import drawBall from "../zoneplay/drawBall.js";
import drawPlayer from "../zoneplay/drawPlayer.js";
const drawPlayerLoseBall = (objectGlobal, canvas) => {
  const ctx = canvas.getContext("2d");
  backgroundCanvas(objectGlobal, { ctx: ctx, canvasPlay: canvas });
  const radiusBall = 10;
  drawBall(objectGlobal, {
    ctx: ctx,
    canvasPlay: canvas,
    x: (50 * canvas.width) / 100,
    y: ((100 - radiusBall) * canvas.height) / 100,
    radiusHeight: radiusBall,
  });
  // player
  const playerHeight = 10;
  const playerWidth = 20;
  drawPlayer(objectGlobal, {
    ctx: ctx,
    canvasPlay: canvas,
    Player: {
      x: (5 * canvas.width) / 100,
      y: ((100 - playerHeight) * canvas.height) / 100,
      width: playerWidth,
      height: playerHeight,
      life: 5,
    },
  });
};
export default drawPlayerLoseBall;
