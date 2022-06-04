const tuchBrick = (listBricks, index) => {
  const brickCible = listBricks[index];
  // on perd un point de vie
  brickCible.life -= 1;
  // si la brique est morte
  if (brickCible.life === 0) {
    listBricks.splice(index, 1);
  }
};
export default tuchBrick;
