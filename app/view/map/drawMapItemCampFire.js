import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawMapItemCampFire = (objectGlobal, item) => {
  const { ctxMap, Commons, canvasMap } = objectGlobal;
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
  ctxMap.drawImage(
    getHtmlCollectionImg(objectGlobal, "campfire"),
    imgPositionX,
    imgPositionY,
    radius * 2,
    radius * 2
  );
};
export default drawMapItemCampFire;
