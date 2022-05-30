/**
 *
 * @param {ArrayObjet} leveling tableau d'objet de niveau
 * @param {ObjetConstant} commons constante global
 * @returns {ArrayObjet} tableau d'objet placement de brique par leveel
 */

const describeBrickForLevel = (leveling, commons) => {
  let nbMaxBrick = [];
  let lengthInLevel = 0;
  let runLevel = 0;
  leveling.forEach((lvl) => {
    // on instacie un tableau dans nbMaxBrick
    if (nbMaxBrick[runLevel] === undefined) nbMaxBrick.push({});

    for (let i = 0; i < lvl.numberBricks; i++) {
      const witdhAndBorderBrick =
        commons.brick[lvl.bricks - 1].width + commons.bordeBrick;
      // si il y a de la place dans le niveau
      if (lengthInLevel + witdhAndBorderBrick <= commons.canvasWidth) {
        // ajoute des constante par default du début de tableau
        lengthInLevel += witdhAndBorderBrick;
        nbMaxBrick[runLevel].sumWidth = lengthInLevel;
        nbMaxBrick[runLevel].finish = false;
        nbMaxBrick[runLevel].level = runLevel;
        if (nbMaxBrick[runLevel].nbBrick !== undefined) {
          const indexId = nbMaxBrick[runLevel].id.find(
            (find) => find === lvl.bricks
          );
          if (indexId === undefined) {
            nbMaxBrick[runLevel].nbBrick.push(0);
            nbMaxBrick[runLevel].id.push(lvl.bricks);
          }
          nbMaxBrick[runLevel].nbBrick[
            nbMaxBrick[runLevel].nbBrick.length - 1
          ] += 1;
        } else {
          nbMaxBrick[runLevel].nbBrick = [1];
          nbMaxBrick[runLevel].id = [lvl.bricks];
        }
      }
      // si il n'y a plus de place dans le niveau
      else {
        nbMaxBrick[runLevel].finish = true;
        runLevel++;
        lengthInLevel = witdhAndBorderBrick;
        nbMaxBrick.push({});
        nbMaxBrick[runLevel].level = runLevel;
        nbMaxBrick[runLevel].nbBrick = [1];
        nbMaxBrick[runLevel].id = [lvl.bricks];
        nbMaxBrick[runLevel].sumWidth = lengthInLevel;
        nbMaxBrick[runLevel].finish = false;
      }
    }
  });
  return nbMaxBrick;
};

export default describeBrickForLevel;
