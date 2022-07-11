const drawMapItemBonus = (ctxMap, item, Commons) => {
  const ratio = window.innerWidth / window.innerHeight;
  const commonsBonus = Commons.mapColorDifficulty.find(
    (f) => f.type === "bonus"
  );
  ctxMap.fillStyle = commonsBonus.halo;

  ctxMap.beginPath();
  ctxMap.arc(
    (window.innerWidth * item.px) / 100,
    (window.innerHeight * item.py) / 100,
    (commonsBonus.raidushalo * window.innerHeight * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctxMap.fill();
};
export default drawMapItemBonus;
