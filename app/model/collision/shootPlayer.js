import { deleteOneShoot } from "../../controler/objetGlobalchange/controleurShoot.js";
import { playerLoseLife } from "./../../controler/objetGlobalchange/controleurPlayer.js";
const shootPlayer = (
  objectGlobal,
  ballXLeft,
  ballXRight,
  ballYTop,
  ballYBottom
) => {
  const { Shoot, Player, canvasPlay } = objectGlobal;
  //const
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  //const playerHeight = (Player.height * canvasPlay.height) / 100;
  Shoot.forEach((oneShoot) => {
    //shoot
    const shootXRight = oneShoot.x;
    const shootXLeft = oneShoot.x + (oneShoot.width * canvasPlay.width) / 100;
    const shootYTop = oneShoot.y;
    const shootYBottom =
      oneShoot.y + (oneShoot.height * canvasPlay.height) / 100;
    if (
      shootXRight > Player.x &&
      shootXLeft < Player.x + playerWidth &&
      shootYBottom >= Player.y &&
      shootYTop < canvasPlay.width
    ) {
      deleteOneShoot(oneShoot, Shoot);
      playerLoseLife(objectGlobal);
    }
    // if shoot not in canvas
    if (shootYBottom > canvasPlay.height) {
      deleteOneShoot(oneShoot, Shoot);
    }
  });
};
export default shootPlayer;
