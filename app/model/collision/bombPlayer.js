import { playerLoseLife } from "../../controler/objetGlobalchange/controleurPlayer.js";
const bombPlayer = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  //destructiring
  const { Player, Bomb, canvasPlay } = objectGlobal;
  //const
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  const rightBomb = Bomb.x;
  const leftBomb = Bomb.x + Bomb.width;
  const xinit = Player.x >= rightBomb && Player.x <= leftBomb;
  const xfinal =
    Player.x + playerWidth >= rightBomb && Player.x + playerWidth <= leftBomb;
  const xOr = xinit || xfinal;
  if (Bomb.active >= 1 && xOr) {
    //lose 1 pv
    return playerLoseLife(objectGlobal);
  }
};
export default bombPlayer;
