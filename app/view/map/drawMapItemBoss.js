import loaderImageIconeSvg from "../loaderimage/loaderImageIconeSvg.js";

const drawMapItemBoss = ({ ctxMap, Commons, canvasMap }, item) => {
  const positionX = (canvasMap.width * item.px) / 100;
  const positionY = (canvasMap.height * item.py) / 100;
  const radius = (Commons.radiusItemMap * canvasMap.height) / 100;
  // cercle
  ctxMap.beginPath();
  ctxMap.fillStyle = "#c92a2a";
  ctxMap.arc(positionX, positionY, radius + 3, 0, Math.PI * 2);

  ctxMap.fill();
  // icone
  const imgPositionX = positionX - radius;
  const imgPositionY = positionY - radius;
  loaderImageIconeSvg("lvlboss").then((rep) => {
    ctxMap.drawImage(rep, imgPositionX, imgPositionY, radius * 2, radius * 2);
  });

  // emoji bonus
  /*   const lenghtEmoji = (Commons.radiusItemMap * canvasMap.height) / 100;
  ctxMap.font = lenghtEmoji + "px Arial";
  ctxMap.strokeText(
    "🎁",
    positionX - lenghtEmoji / 2,
    positionY + lenghtEmoji / 4
  ); */
};
export default drawMapItemBoss;
