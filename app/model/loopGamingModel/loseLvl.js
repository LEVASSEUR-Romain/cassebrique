import stopLoopGame from "./tools/stopLoopGame.js";
const loseLvl = (objectGlobal) => {
  if (objectGlobal.Player.life === 0) {
    objectGlobal.start = false;
    stopLoopGame(objectGlobal);
    alert("Perdu recommencer");
  }
};
export default loseLvl;
