// see drawMapItem
const drawMapItemBonus = ({ ctxMap, Commons, canvasMap }, item) => {
  //draw circle
  ctxMap.beginPath();
  ctxMap.fillStyle = "#fa5252";
  ctxMap.arc(
    (canvasMap.width * item.px) / 100,
    (canvasMap.height * item.py) / 100,
    (Commons.radiusItemMap * canvasMap.height) / 100,
    0,
    Math.PI * 2
  );

  ctxMap.fill();
  // emoji \ud83c\udf81 Cadeau
  const positionX = (canvasMap.width * item.px) / 100;
  const positionY = (canvasMap.height * item.py) / 100;
  const lenghtEmoji = (Commons.radiusItemMap * canvasMap.height) / 100;
  ctxMap.font = lenghtEmoji + "px Arial";
  ctxMap.strokeText(
    "🎁",
    positionX - lenghtEmoji / 2,
    positionY + lenghtEmoji / 4
  );
};
export default drawMapItemBonus;
