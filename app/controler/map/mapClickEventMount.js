import mapControleAccesChangePlayer from "./mapControleAccesChangePlayer.js";
import finishItemMap from "./finishItemMap.js";
// there is test for this function
// manipulation for all map controleur
const mapClickEventMount = (
  event,
  { itemMapPosition, Commons, Player, canvasMap }
) => {
  if (!Player.lastClickLvl) {
    let elementCible = "";
    const clickX = event.layerX;
    const clickY = event.layerY;
    const ratio = canvasMap.width / canvasMap.height;
    const radiusElmt = (Commons.radiusItemMap * canvasMap.height * ratio) / 100;
    itemMapPosition.forEach((ligne) => {
      ligne.forEach((elmt) => {
        const elmtRight = (canvasMap.width * elmt.px) / 100 - radiusElmt;
        const elmtLeft = (canvasMap.width * elmt.px) / 100 + radiusElmt;
        const elemTop = (canvasMap.height * elmt.py) / 100 - radiusElmt;
        const elemBottom = (canvasMap.height * elmt.py) / 100 + radiusElmt;
        if (
          clickX > elmtRight &&
          clickX < elmtLeft &&
          clickY > elemTop &&
          clickY < elemBottom
        ) {
          const afterId = Player.currentIdLvl;
          if (mapControleAccesChangePlayer(elmt, Player)) {
            finishItemMap(afterId, itemMapPosition);
            Player.pxMap = elmt.px;
            Player.pyMap = elmt.py;
            elementCible = elmt.difficulty;
          }
        }
      });
    });
    return elementCible || elementCible === 0 ? elementCible : false;
  }
  return false;
};

export default mapClickEventMount;
