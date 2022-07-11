import drawMapItemBonus from "./drawMapItemBonus.js";

const drawMapItem = (ctxMap, listMap, Commons) => {
  const ratio = window.innerWidth / window.innerHeight;
  listMap.forEach((level) => {
    for (let i = 0; i < level.length; i++) {
      // change couleur si fini
      if (!level[i].finish) {
        // easy
        if (level[i].type === "mob" && !level[i].bonus) {
          const color = Commons.mapColorDifficulty.find(
            (f) => f.type === "easy"
          ).color;
          ctxMap.fillStyle = color;
        }
        //more difficulte with alo
        else if (level[i].type === "mob" && level[i].bonus) {
          const color = Commons.mapColorDifficulty.find(
            (f) => f.type === "bonus"
          ).color;
          ctxMap.fillStyle = color;
        } else
          ctxMap.fillStyle = Commons.mapColorDifficulty.find(
            (f) => f.type === "boss"
          ).color;
      } else {
        ctxMap.fillStyle = Commons.colorFinishRound;
      }

      ctxMap.beginPath();
      ctxMap.arc(
        (window.innerWidth * level[i].px) / 100,
        (window.innerHeight * level[i].py) / 100,
        (Commons.radiusItemMap * window.innerHeight * ratio) / 100,
        0,
        Math.PI * 2
      );
      ctxMap.fill();

      if (level[i].type === "mob" && level[i].bonus) {
        drawMapItemBonus(ctxMap, level[i], Commons);
      }
    }
  });
};
export default drawMapItem;
