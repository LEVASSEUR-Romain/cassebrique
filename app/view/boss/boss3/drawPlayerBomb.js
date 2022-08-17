import backgroundCanvas from "../../zoneplay/backgroundCanvas.js";
import drawPlayer from "./../../zoneplay/drawPlayer.js";
import commonsBoss from "../../../model/commons/commonsBoss.js";
import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawPlayerBomb = (objectGlobal, canvas) => {
  const ctx = canvas.getContext("2d");
  backgroundCanvas(objectGlobal, { ctx: ctx, canvasPlay: canvas });
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
  // warning
  const bombwidht = canvas.width / 3;
  const widthWarning = (50 * bombwidht) / 100;
  const heightWaning = (15 * canvas.height) / 100;

  ctx.fillStyle = commonsBoss.boss3.colorAnimation;
  ctx.fillRect(0, 0, bombwidht, canvasPlay.height);
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "bomb"),
    widthWarning / 2,
    canvas.height / 2 - heightWaning,
    widthWarning,
    heightWaning
  );
  // timer
  const time = 0;
  ctx.font = "25px serif";
  ctx.fillStyle = "black";
  ctx.fillText(time, widthWarning / 2, canvas.height / 2 - heightWaning);
};
export default drawPlayerBomb;
