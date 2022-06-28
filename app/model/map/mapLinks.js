const mapLinks = (map) => {
  let arrayFinal = [];
  for (let i = map.length - 1; i > 0; i--) {
    const positionI = map[i];
    for (let y = 0; y < positionI.length; y++) {
      positionI[y].parent.forEach((parent) => {
        if (parent !== 0) {
          const item = map[i - 1].find((e) => e.id === parent);
          arrayFinal.push({
            pix: positionI[y].px,
            piy: positionI[y].py,
            pfx: item.px,
            pfy: item.py,
          });
        }
      });
    }
  }
  return arrayFinal;
};
export default mapLinks;
