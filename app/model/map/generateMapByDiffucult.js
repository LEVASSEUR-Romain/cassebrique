const generateMapByDiffucult = (difficult) => {
  if (difficult <= 2) {
    return [
      {
        bricks: 1,
        numberBricks: 6 * difficult,
      },
    ];
  } else if (2 < difficult && difficult <= 4) {
    const retarded = difficult - 1;
    return [
      {
        bricks: 1,
        numberBricks: 3 * retarded,
      },
      {
        bricks: 2,
        numberBricks: 4 * retarded,
      },
    ];
  } else if (4 < difficult && difficult <= 6) {
    const retarded = difficult - 3;
    return [
      {
        bricks: 2,
        numberBricks: 3 * retarded,
      },
      {
        bricks: 3,
        numberBricks: 3 * retarded,
      },
    ];
  }
};
export default generateMapByDiffucult;
