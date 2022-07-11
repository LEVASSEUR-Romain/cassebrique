const intRandomOnListUnique = (min, max, nb) => {
  if (max - min < nb) return [];
  let tbl = new Set();
  for (let i = 0; i < nb; i++) {
    const length = tbl.size;
    while (length === tbl.size) {
      const random = Math.floor(Math.random() * (max - min)) + min;
      tbl.add(random);
    }
  }
  return Array.from(tbl);
};
export default intRandomOnListUnique;
