import deleteComposantLifeBoss from "../../view/boss/modal/deleteComposantLifeBoss.js";
import updateComposantLifeBoss from "../../view/boss/modal/updateComposantLifeBoss.js";
const controlerBossLife = (Boss) => {
  if (Boss.life === 0) {
    deleteComposantLifeBoss();
  } else {
    updateComposantLifeBoss(Boss.life);
  }
};
export default controlerBossLife;
