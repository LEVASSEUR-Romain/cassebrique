// see drawMapItem
const drawMapItemBonus = (ctxMap, item, Commons, canvasMap) => {
  // ALERT ICI
  //const ratio = canvasMap.width / canvasMap.height;
  const commonsBonus = Commons.mapColorDifficulty.find(
    (f) => f.type === "bonus"
  );
  // emoji \ud83c\udf81 Cadeau
  const positionX = (canvasMap.width * item.px) / 100;
  const positionY = (canvasMap.height * item.py) / 100;
  const lenghtEmoji = (Commons.radiusItemMap * canvasMap.height) / 100;
  ctxMap.font = lenghtEmoji + "px Arial";
  //ctxMap.strokeStyle = "rgb(0,0,0)";
  ctxMap.strokeText(
    commonsBonus.emoji,
    positionX - lenghtEmoji / 2,
    positionY + lenghtEmoji / 4
  );

  /*  
ctxMap.fillStyle = commonsBonus.halo;
 ctxMap.beginPath();
  ctxMap.arc(
    (canvasMap.width * item.px) / 100,
    (canvasMap.height * item.py) / 100,
    (commonsBonus.raidushalo * canvasMap.height) / 100,
    //(commonsBonus.raidushalo * canvasMap.height * ratio) / 100,
    0,
    Math.PI * 2
  );
  ctxMap.fill(); */
};
export default drawMapItemBonus;
