const calculNbBrick = (leveling) => {
  return leveling.reduce((acc, curr) => {
    if (acc === 0) return acc.numberBricks + curr.numberBricks;
    else return acc + curr.numberBricks;
  });
};

const brickForLevel = (leveling, commons) => {
  let nbMaxBrick = [];
  let lengthInLevel = 0;
  let runLevel = 0;
  leveling.forEach((e) => {
    if (nbMaxBrick[runLevel] === undefined) nbMaxBrick.push({});
    for (let i = 0; i < e.numberBricks; i++) {
      const calcul = commons.brick[e.bricks - 1].with + commons.bordeBrick;
      if (lengthInLevel + calcul <= commons.canvasWidth) {
        lengthInLevel += calcul;
        nbMaxBrick[runLevel].level = runLevel;
        if (nbMaxBrick[runLevel][e.bricks] !== undefined)
          nbMaxBrick[runLevel][e.bricks] += e.numberBricks;
        else nbMaxBrick[runLevel][e.bricks] = e.numberBricks;
      } else {
        runLevel++;
        lengthInLevel = 0;
        nbMaxBrick.push({});
        nbMaxBrick[runLevel].level = runLevel;
        nbMaxBrick[runLevel][e.bricks] = e.numberBricks;
      }
    }
  });
  return nbMaxBrick;
};

const level = (leveling, commons) => {
  let array = [];
  leveling = leveling.sort((a, b) => b.bricks - a.bricks);
  const nbBrick = calculNbBrick(leveling);
  const nbMaxBrick = brickForLevel(leveling, commons);
  nbMaxBrick.forEach((e) => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < e.numberBricks; i++) {
      array.push(e.bricks);
    }
  });
  return array;
};
