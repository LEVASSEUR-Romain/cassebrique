import {
  fireBomb,
  addBomb,
  setPreviewframe,
  isBombFire,
  stopFireBomb,
} from "../../../../controler/objetGlobalchange/controleurBomb.js";
import { updateMapTierBomb } from "../../../../controler/objetGlobalchange/controleurBoss.js";
const boss3 = (objectGlobal) => {
  const { Boss, canvasPlay } = objectGlobal;
  const speedBoss = (Boss.speed * canvasPlay.height) / 100;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  const maxBottom =
    canvasPlay.height - (Boss.borderMaxBottom * canvasPlay.height) / 100;
  const positionPlayerMaxBottom = maxBottom - bossHeight;
  const borderTop = 0;
  const positionXLeft = canvasPlay.width - bossWidth;
  const positionXRight = 0;

  // move boss
  switch (Boss.move) {
    case "upRight":
      Boss.y -= speedBoss;
      Boss.x = positionXRight;
      if (Boss.y <= borderTop) {
        Boss.move = "downLeft";
      }
      break;
    case "downRight":
      Boss.y += speedBoss;
      Boss.x = positionXRight;
      if (Boss.y >= positionPlayerMaxBottom) {
        Boss.move = "upRight";
      }
      break;
    case "upLeft":
      Boss.x = positionXLeft;
      Boss.y -= speedBoss;
      if (Boss.y <= borderTop) {
        Boss.move = "downRight";
      }
      break;
    case "downLeft":
      Boss.x = positionXLeft;
      Boss.y += speedBoss;
      if (Boss.y >= positionPlayerMaxBottom) {
        Boss.move = "upLeft";
      }
      break;
  }
  Boss.frame = Boss.frame === undefined ? 1 : Boss.frame + 1;
  // -------------------------- Bomb activate animation -----------
  // show bomb is comming
  if (Boss.frame % Boss.previewBomb === 0) {
    setPreviewframe(objectGlobal, true);
  }
  // ------------------------- Bomb fire --------------------
  if (isBombFire(objectGlobal)) {
    stopFireBomb(objectGlobal);
    addBomb(objectGlobal);
  }
  if (Boss.frame % Boss.frameBomb === 0) {
    //reset animation
    setPreviewframe(objectGlobal, false);
    fireBomb(objectGlobal);
    updateMapTierBomb(objectGlobal);
  }
};
export default boss3;
