import controlerBoss1 from "./controlerBoss1.js";
import composantBossShow from "../../view/boss/modal/composantBossShow.js";
import onModalBoss from "../eventListener/modal/onModalBoss.js";
import controlerBoss2 from "./controlerBoss2.js";
import controlerBoss3 from "./controlerBoss3.js";
// composant
import composantInfoBoss1 from "../../view/boss/boss1/composantInfoBoss1.js";
import composantInfoBoss2 from "../../view/boss/boss2/composantInfoBoss2.js";
import composantInfoBoss3 from "../../view/boss/boss3/composantInfoBoss3.js";

const controlerBoss = (objectGlobal, nbrOfBoss) => {
  // view title
  //composantBossShow(objectGlobal.Commons, nbrOfBoss);

  // change when other boss
  switch (nbrOfBoss) {
    case 1:
      composantInfoBoss1(objectGlobal);
      onModalBoss();
      controlerBoss1(objectGlobal);
      break;
    case 2:
      composantInfoBoss2(objectGlobal);
      onModalBoss();
      controlerBoss2(objectGlobal);
      break;
    case 3:
      composantInfoBoss3(objectGlobal);
      onModalBoss();
      controlerBoss3(objectGlobal);
  }
};
export default controlerBoss;
