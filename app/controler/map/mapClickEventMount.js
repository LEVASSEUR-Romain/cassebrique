import mapControleAccesChangePlayer from "./mapControleAccesChangePlayer.js";
import { setPositioMapPlayer } from "../objetGlobalchange/controleurPlayer.js";
// there is test for this function
// manipulation for all map controleur
const mapClickEventMount = (event, objectGlobal) => {
  const {
    itemMapPosition,
    Commons,
    Player,
    canvasMap, //ctxMap
  } = objectGlobal;
  if (!Player.lastClickLvl) {
    let elementCible = "";
    const clickX = event.layerX;
    const clickY = event.layerY;
    const radiusElmt = (Commons.radiusItemMap * canvasMap.height) / 100;
    itemMapPosition.forEach((ligne) => {
      ligne.forEach((elmt) => {
        const elmtRight = (canvasMap.width * elmt.px) / 100 - radiusElmt;
        const elmtLeft = (canvasMap.width * elmt.px) / 100 + radiusElmt;
        const elemTop = (canvasMap.height * elmt.py) / 100 - radiusElmt;
        const elemBottom = (canvasMap.height * elmt.py) / 100 + radiusElmt;
        //debug show collision
        /*         ctxMap.fillStyle = "red";
        ctxMap.fillRect(
          elmtRight,
          elemTop,
          elmtLeft - elmtRight,
          elemBottom - elemTop
        ); */
        if (
          clickX > elmtRight &&
          clickX < elmtLeft &&
          clickY > elemTop &&
          clickY < elemBottom
        ) {
          const afterId = Player.currentIdLvl;
          if (mapControleAccesChangePlayer(elmt, Player)) {
            setPositioMapPlayer(objectGlobal, elmt);
            elementCible = elmt;
          }
        }
      });
    });
    return elementCible || elementCible === 0 ? elementCible : false;
  }
  return false;
};

export default mapClickEventMount;
