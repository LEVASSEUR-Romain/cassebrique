import drawBoss1 from "./boss1/drawBoss1.js";
import drawBoss2 from "./boss2/drawBoss2.js";
import drawBoss3 from "./boss3/drawBoss3.js";
import drawBall from "../zoneplay/drawBall.js";
import backgroundCanvas from "../zoneplay/backgroundCanvas.js";
import commonsBoss from "../../model/commons/commonsBoss.js";

const drawPlayerBoss = (objectGlobal, canvas, numberBoss) => {
  const ctx = canvas.getContext("2d");
  const radiusBall = 10;
  let widthBoss = 30;
  let heightBoss = 20;
  let playerX = (50 * canvas.width) / 100;
  let playerY = ((radiusBall + heightBoss) * canvas.height) / 100;
  //draw
  backgroundCanvas(objectGlobal, { ctx: ctx, canvasPlay: canvas });
  switch (numberBoss) {
    case 1:
      drawBoss1(objectGlobal, {
        ctx: ctx,
        canvasPlay: canvas,
        Boss: {
          x: canvas.width / 2 - (widthBoss * canvas.width) / 100 / 2,
          y: 0,
          width: widthBoss,
          height: heightBoss,
        },
      });
      break;
    case 2:
      drawBoss2(objectGlobal, {
        ctx: ctx,
        canvasPlay: canvas,
        Boss: {
          x: canvas.width / 2 - (widthBoss * canvas.width) / 100 / 2,
          y: 0,
          width: widthBoss,
          height: heightBoss,
          color: commonsBoss.boss2.color,
        },
      });
      break;
    case 3:
      widthBoss = 10;
      heightBoss = 50;
      playerX = ((widthBoss + radiusBall / 2) * canvas.width) / 100;
      playerY = (25 * canvas.height) / 100;
      drawBoss3(objectGlobal, {
        ctx: ctx,
        canvasPlay: canvas,
        Boss: {
          x: 0,
          y: 0,
          width: widthBoss,
          height: heightBoss,
          color: commonsBoss.boss3.color,
        },
      });
      break;
  }

  drawBall(objectGlobal, {
    ctx: ctx,
    canvasPlay: canvas,
    x: playerX,
    y: playerY,
    radiusHeight: radiusBall,
  });
};
export default drawPlayerBoss;
