import { addShoot } from "../../../../controler/objetGlobalchange/controleurShoot.js";
import playSound from "../../../../controler/sound/playSound.js";
const boss1 = (objectGlobal) => {
  const { Player, Boss, canvasPlay } = objectGlobal;
  Boss.frame = Boss.frame === undefined ? 1 : Boss.frame + 1;
  const goToPosition = (Boss.speed * canvasPlay.width) / 100;
  // move boss
  if (Player.x > Boss.x) {
    const avancement = Boss.x + goToPosition;
    Boss.x = avancement > Player.x ? Player.x : avancement;
    //Boss.x += goToPosition;
  } else if (Player.x < Boss.x) {
    const avancement = Boss.x - goToPosition;
    Boss.x = avancement < Player.x ? Player.x : avancement;
    //Boss.x -= goToPosition;
  }
  //shoot x frame modulo
  if (Boss.frame % Boss.frameShoot === 0) {
    playSound(objectGlobal, "boss1Shoot");
    addShoot(objectGlobal);
  }
};
export default boss1;
