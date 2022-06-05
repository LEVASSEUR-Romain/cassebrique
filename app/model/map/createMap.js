const createMap = (Commons) => {
  const bossFinal = 1;
  let id = 1;
  const border = Commons.map.border;
  const oneLineHeight =
    Commons.canvasHeight / (Commons.map.numberLevel + bossFinal);
  const oneLineWidth = Commons.canvasWidth / Commons.map.possibility;
  const map = [];
  for (let y = 0; y < Commons.map.numberLevel; y++) {
    for (let x = 0; x < Commons.map.possibility; x++) {
      map.push({
        id: id,
        x: x * oneLineWidth + border,
        y: y * oneLineHeight + border,
      });
      id++;
    }
  }
  //ajouter le boss final
  map.push({
    id: id,
    x: Commons.canvasWidth / 2,
    y: border,
  });
  return map;
};
