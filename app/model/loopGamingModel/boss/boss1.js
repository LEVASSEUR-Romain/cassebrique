import { addShoot } from "../../../controler/objetGlobalchange/controleurShoot.js";

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
    addShoot(objectGlobal);
  }
  //console.log([...objectGlobal.Shoot]);
};
export default boss1;
