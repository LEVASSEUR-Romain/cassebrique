import describeBrickForLevel from "./describeBrickForLevel.js";

const positionInLevelBrick = (leveling, commons) => {
  let array = [];
  leveling = leveling.sort((a, b) => b.bricks - a.bricks);
  const describelvl = describeBrickForLevel(leveling, commons);
  // si pas de donner de nombre de brick
  if (Object.keys(describelvl[0]).length === 0) return [];
  let y = 0;
  describelvl.forEach((lvl) => {
    let x = (commons.canvasWidth - lvl.sumWidth) / 2;
    for (let inId = 0; inId < lvl.id.length; inId++) {
      const id = lvl.id[inId];
      for (let j = 0; j < lvl.nbBrick[inId]; j++) {
        array.push({ x: x, y: y, id: id });
        const cibleWidth = commons.brick[id - 1].width;
        x += cibleWidth + commons.bordeBrick;
      }
    }
    y += commons.brick[lvl.id[0] - 1].height + commons.bordeBrick;
  });

  return array;
};

export default positionInLevelBrick;
