import backgroundCanvas from "../../zoneplay/backgroundCanvas.js";
import drawPlayer from "../../zoneplay/drawPlayer.js";
import drawShoot from "./drawShoot.js";

const drawShootPlayer = (objectGlobal, canvas) => {
  const ctx = canvas.getContext("2d");

  backgroundCanvas(objectGlobal, { ctx: ctx, canvasPlay: canvas });
  const playerHeight = 10;
  const playerWidth = 20;
  drawPlayer(objectGlobal, {
    ctx: ctx,
    canvasPlay: canvas,
    Player: {
      x: ((50 - playerWidth / 2) * canvas.width) / 100,
      y: ((100 - playerHeight) * canvas.height) / 100,
      width: playerWidth,
      height: playerHeight,
      life: 5,
    },
  });
  const heightShoot = 10;
  const widthShoot = 10;
  drawShoot(objectGlobal, {
    ctx: ctx,
    canvasPlay: canvas,
    Shoot: [
      {
        x: ((50 - playerWidth / 2) * canvas.width) / 100,
        y: ((100 - playerHeight - heightShoot / 2) * canvas.height) / 100,
        width: widthShoot,
        height: heightShoot,
      },
    ],
  });
};
export default drawShootPlayer;
