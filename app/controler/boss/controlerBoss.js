import controlerBoss1 from "./controlerBoss1.js";
import composantBossShow from "../../view/boss/modal/composantBossShow.js";
import onModalBoss from "../eventListener/modal/onModalBoss.js";
import controlerBoss2 from "./controlerBoss2.js";

const controlerBoss = (objectGlobal, nbrOfBoss) => {
  // view title
  composantBossShow(objectGlobal.Commons, nbrOfBoss);
  onModalBoss();
  // change when other boss
  switch (nbrOfBoss) {
    case 1:
      controlerBoss1(objectGlobal);
      break;
    case 2:
      controlerBoss2(objectGlobal);
      break;
  }
};
export default controlerBoss;
