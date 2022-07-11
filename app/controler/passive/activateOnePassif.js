import intRandomOnListUnique from "../../tools/intRandomOnListUnique.js";
import PassiveBonus from "../../model/Passive/PassiveBonus.js";
const activateOnePassif = (Player, Commons, ball) => {
  const startTbl = 0;
  const tblRandom = intRandomOnListUnique(
    startTbl,
    PassiveBonus.length,
    Commons.choiceOfPassive
  );
};
export default activateOnePassif;
