import loaderImageIconeSvg from "../loaderimage/loaderImageIconeSvg.js";

const drawMapItemFinish = ({ ctxMap, Commons, canvasMap }, item) => {
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
  loaderImageIconeSvg("close").then((rep) => {
    ctxMap.drawImage(rep, imgPositionX, imgPositionY, radius * 2, radius * 2);
  });
};
export default drawMapItemFinish;
