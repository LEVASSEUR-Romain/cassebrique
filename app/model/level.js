const calculNbBrick = (leveling) => {
  return leveling.reduce((acc, curr) => {
    if (acc === 0) return acc.numberBricks + curr.numberBricks;
    else return acc + curr.numberBricks;
  });
};

const level = (leveling, commons) => {
  let array = [];
  leveling = leveling.sort((a, b) => b.bricks - a.bricks);
  const nbBrick = calculNbBrick(leveling);
  console.error(nbBrick);
  const nbMaxBrick = brickForLevel(leveling, commons);
  console.error(nbMaxBrick);
  let x = 0;
  let y = 0;
  nbMaxBrick.forEach((e) => {
    for (let i = 0; i < e.numberBricks; i++) {
      array.push(e.bricks);
    }
  });
  return array;
};

export default level;
