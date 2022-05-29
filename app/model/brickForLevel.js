/**
 *
 * @param {ArrayObjet} leveling tableau d'objet de niveau
 * @param {ObjetConstant} commons constante global
 * @returns {ArrayObjet} tableau d'objet placement de brique par leveel
 */

const brickForLevel = (leveling, commons) => {
  let nbMaxBrick = [];
  let lengthInLevel = 0;
  let runLevel = 0;
  leveling.forEach((e) => {
    if (nbMaxBrick[runLevel] === undefined) nbMaxBrick.push({});
    for (let i = 0; i < e.numberBricks; i++) {
      const witdhAndBorderBrick =
        commons.brick[e.bricks - 1].with + commons.bordeBrick;
      if (lengthInLevel + witdhAndBorderBrick <= commons.canvasWidth) {
        lengthInLevel += witdhAndBorderBrick;
        nbMaxBrick[runLevel].level = runLevel;
        if (nbMaxBrick[runLevel].nbBrick !== undefined) {
          const indexId = nbMaxBrick[runLevel].id.find(
            (find) => find === e.bricks
          );
          if (indexId === undefined) {
            nbMaxBrick[runLevel].nbBrick.push(0);
            nbMaxBrick[runLevel].id.push(e.bricks);
          }
          nbMaxBrick[runLevel].nbBrick[
            nbMaxBrick[runLevel].nbBrick.length - 1
          ] += 1;
        } else {
          nbMaxBrick[runLevel].nbBrick = [1];
          nbMaxBrick[runLevel].id = [e.bricks];
        }
      } else {
        runLevel++;
        lengthInLevel = commons.brick[e.bricks - 1].with + commons.bordeBrick;
        nbMaxBrick.push({});
        nbMaxBrick[runLevel].level = runLevel;
        nbMaxBrick[runLevel].nbBrick = [1];
        nbMaxBrick[runLevel].id = [e.bricks];
      }
    }
  });
  return nbMaxBrick;
};

export default brickForLevel;
