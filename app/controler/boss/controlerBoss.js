import controlerBoss1 from "./controlerBoss1.js";

const controlerBoss = (objectGlobal) => {
  // ici on dispatch le controle boss pour le moment il y en a qu'un seul
  // si plusieur boss on peu utilise searchBrickById pour avoir le type du boss
  // afficher Boss ici
  controlerBoss1(objectGlobal);
};
export default controlerBoss;
