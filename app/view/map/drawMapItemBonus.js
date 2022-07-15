// see drawMapItem
const drawMapItemBonus = (ctxMap, item, Commons, canvasMap) => {
  const ratio = canvasMap.width / canvasMap.height;
  const commonsBonus = Commons.mapColorDifficulty.find(
    (f) => f.type === "bonus"
  );
  ctxMap.fillStyle = commonsBonus.halo;

  ctxMap.beginPath();
  ctxMap.arc(
    (canvasMap.width * item.px) / 100,
    (canvasMap.height * item.py) / 100,
    (commonsBonus.raidushalo * canvasMap.height * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctxMap.fill();
};
export default drawMapItemBonus;
