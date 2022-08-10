import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawMapItemFinish = (objectGlobal, item) => {
  const { ctxMap, Commons, canvasMap } = objectGlobal;
  ctxMap.beginPath();
  ctxMap.fillStyle = "black";
  ctxMap.arc(
    (canvasMap.width * item.px) / 100,
    (canvasMap.height * item.py) / 100,
    (Commons.radiusItemMap * canvasMap.height) / 100,
    0,
    Math.PI * 2
  );

  ctxMap.fill();
  const positionX = (canvasMap.width * item.px) / 100;
  const positionY = (canvasMap.height * item.py) / 100;
  const radius = (Commons.radiusItemMap * canvasMap.height) / 100;
  // icone
  const imgPositionX = positionX - radius;
  const imgPositionY = positionY - radius;
  ctxMap.drawImage(
    getHtmlCollectionImg(objectGlobal, "close"),
    imgPositionX,
    imgPositionY,
    radius * 2,
    radius * 2
  );
};
export default drawMapItemFinish;
