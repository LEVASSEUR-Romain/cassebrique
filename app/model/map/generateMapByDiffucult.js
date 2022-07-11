const generateMapByDiffucult = (difficult) => {
  if (difficult <= 2) {
    return [
      {
        bricks: 1,
        numberBricks: 6 * difficult,
      },
    ];
  }
  if (2 < difficult && difficult <= 4) {
    return [
      {
        bricks: 1,
        numberBricks: 3 * difficult,
      },
      {
        bricks: 2,
        numberBricks: 4 * difficult,
      },
    ];
  }

  if (4 < difficult && difficult <= 6) {
    return [
      {
        bricks: 1,
        numberBricks: 2 * difficult,
      },
      {
        bricks: 2,
        numberBricks: 5 * difficult,
      },
      {
        bricks: 3,
        numberBricks: 3 * difficult,
      },
    ];
  }
};
export default generateMapByDiffucult;
