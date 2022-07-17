import controlerBoss1 from "./controlerBoss1.js";
import composantBossShow from "../../view/boss/composantBossShow.js";
import deleteComposantBoss from "../../view/boss/deleteComposantBoss.js";
import commonsDescribeBoss from "../../model/commons/commonsDescribeBoss.js";

const controlerBoss = (objectGlobal) => {
  // one code for the moment change when other boss
  const nbrBoss = 1;
  // ici on dispatch le controle boss pour le moment il y en a qu'un seul
  // si plusieur boss on peu utilise searchBrickById pour avoir le type du boss
  // view title
  composantBossShow(objectGlobal.Commons, nbrBoss);
  setTimeout(deleteComposantBoss, commonsDescribeBoss.timeShow);
  // change when other boss
  controlerBoss1(objectGlobal);
};
export default controlerBoss;
