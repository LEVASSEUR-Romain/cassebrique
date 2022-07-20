import describeBrickForLevel from "./describeBrickForLevel.js";

const positionInLevelBrick = (leveling, Commons) => {
  let array = [];
  leveling = leveling.sort((a, b) => b.bricks - a.bricks);
  const describelvl = describeBrickForLevel(leveling, Commons);
  // si pas de donner de nombre de brick
  if (Object.keys(describelvl[0]).length === 0) return [];
  let y = 0;
  describelvl.forEach((lvl) => {
    let x = (window.innerWidth - lvl.sumWidth) / 2;
    for (let inId = 0; inId < lvl.id.length; inId++) {
      const id = lvl.id[inId];
      for (let j = 0; j < lvl.nbBrick[inId]; j++) {
        array.push({
          x: x,
          y: y,
          id: id,
          life: Commons.brick[id - 1].life,
          px: Math.round((x / window.innerWidth) * 100, 2),
          py: Math.round((y / window.innerHeight) * 100, 2),
        });
        const cibleWidth =
          (Commons.brick[id - 1].width * window.innerWidth) / 100;
        x += Math.round(
          cibleWidth + (Commons.bordeBrick * window.innerWidth) / 100,
          2
        );
      }
    }
    y += Math.round(
      (Commons.brick[lvl.id[0] - 1].height * window.innerHeight) / 100 +
        (Commons.bordeBrick * window.innerHeight) / 100,
      2
    );
  });

  return array;
};

export default positionInLevelBrick;
