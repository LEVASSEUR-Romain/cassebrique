import loaderImageIconeSvg from "../loaderimage/loaderImageIconeSvg.js";
const drawMapItemCampFire = ({ ctxMap, Commons, canvasMap }, item) => {
  const positionX = (canvasMap.width * item.px) / 100;
  const positionY = (canvasMap.height * item.py) / 100;
  const radius = (Commons.radiusItemMap * canvasMap.height) / 100;
  ctxMap.beginPath();
  ctxMap.fillStyle = "yellow";
  ctxMap.arc(positionX, positionY, radius, 0, Math.PI * 2);
  ctxMap.fill();
  // icone
  const imgPositionX = positionX - radius;
  const imgPositionY = positionY - radius;
  loaderImageIconeSvg("campfire").then((rep) => {
    ctxMap.drawImage(rep, imgPositionX, imgPositionY, radius * 2, radius * 2);
  });
};
export default drawMapItemCampFire;
