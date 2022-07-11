import mapControleAccesChangePlayer from "./mapControleAccesChangePlayer.js";
import finishItemMap from "./finishItemMap.js";
// there is test for this function
// manipulation for all map controleur
const mapClickEventMount = (event, itemMap, Commons, Player) => {
  if (!Player.lastClickLvl) {
    let elementCible = "";
    const clickX = event.layerX;
    const clickY = event.layerY;
    const ratio = window.innerWidth / window.innerHeight;
    const radiusElmt =
      (Commons.radiusItemMap * window.innerHeight * ratio) / 100;
    itemMap.forEach((ligne) => {
      ligne.forEach((elmt) => {
        const elmtRight = (window.innerWidth * elmt.px) / 100 - radiusElmt;
        const elmtLeft = (window.innerWidth * elmt.px) / 100 + radiusElmt;
        const elemTop = (window.innerHeight * elmt.py) / 100 - radiusElmt;
        const elemBottom = (window.innerHeight * elmt.py) / 100 + radiusElmt;
        if (
          clickX > elmtRight &&
          clickX < elmtLeft &&
          clickY > elemTop &&
          clickY < elemBottom
        ) {
          const afterId = Player.currentIdLvl;
          if (mapControleAccesChangePlayer(elmt, Player)) {
            finishItemMap(afterId, itemMap);
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
