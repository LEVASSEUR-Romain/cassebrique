import drawBoss1 from "../../view/boss/drawBoss1.js";
import commonsBoss from "../../model/loopGamingModel/boss/commonsBoss.js";
const controlerBoss1 = (objectGlobal) => {
  //destructuring
  const { ctx, Commons } = objectGlobal;
  // restart de la game position pret a tirer

  // add boss ton objetGlobal
  console.log(commonsBoss);
  objectGlobal.Boss = commonsBoss.boss1;
  // on affiche le boss
  drawBoss1(ctx, objectGlobal.Boss, Commons);
};
export default controlerBoss1;
