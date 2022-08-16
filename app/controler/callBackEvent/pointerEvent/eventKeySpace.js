import goControleGame from "../goControleGame.js";
const eventKeySpace = (e, objectGlobal) => {
  //space bar 32
  if (e.keyCode === 32) {
    if (!objectGlobal.start && objectGlobal.Player.lastClickLvl) {
      // not tuto boss
      const tutoBoss = document.getElementById("boss");
      if (tutoBoss === null) {
        goControleGame(objectGlobal);
      }
    }
  }
};
export default eventKeySpace;
