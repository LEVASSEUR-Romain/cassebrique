const drawMapItem = (ctxMap, listMap, Commons) => {
  const ratio = window.innerWidth / window.innerHeight;
  listMap.forEach((level) => {
    for (let i = 0; i < level.length; i++) {
      ctxMap.fillStyle = Commons.mapColorDifficulty[level[i].difficulty];
      ctxMap.beginPath();
      ctxMap.arc(
        (window.innerWidth * level[i].px) / 100,
        (window.innerHeight * level[i].py) / 100,
        (Commons.radiusItemMap * window.innerHeight * ratio) / 100,
        0,
        Math.PI * 2
      );
      ctxMap.fill();
    }
  });
};
export default drawMapItem;
