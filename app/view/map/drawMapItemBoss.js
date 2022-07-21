const drawMapItemBoss = ({ ctxMap, Commons, canvasMap }, item) => {
  ctxMap.beginPath();
  ctxMap.fillStyle = "#c92a2a";
  ctxMap.arc(
    (canvasMap.width * item.px) / 100,
    (canvasMap.height * item.py) / 100,
    (Commons.radiusItemMap * canvasMap.height) / 100,
    0,
    Math.PI * 2
  );

  ctxMap.fill();
};
export default drawMapItemBoss;
