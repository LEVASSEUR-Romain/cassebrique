import { playerLoseLife } from "../../controler/objetGlobalchange/controleurLife.js";
import { deleteShoot } from "../../controler/objetGlobalchange/controleurShoot.js";
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
  const playerHeight = (Player.height * canvasPlay.height) / 100;
  Shoot.forEach((oneShoot) => {
    //shoot
    const shootXRight = (oneShoot.px * canvasPlay.width) / 100;
    const shootXLeft =
      (oneShoot.px * canvasPlay.width) / 100 +
      (oneShoot.width * canvasPlay.width) / 100;
    const shootYBottom = (oneShoot.py * canvasPlay.height) / 100;
    const shootYTop =
      (oneShoot.py * canvasPlay.height) / 100 +
      (oneShoot.height * canvasPlay.height) / 100;
    // if shoot touch player
    if (
      shootXRight > Player.x &&
      shootXLeft < Player.x + playerWidth &&
      shootYBottom > Player.y &&
      shootYTop < Player.y + playerHeight
    ) {
      deleteShoot(oneShoot, Shoot);
      playerLoseLife(objectGlobal);
    }
    // if shoot not in canvas
    if (shootYTop > canvasPlay.height) {
      deleteShoot(oneShoot, Shoot);
    }
  });
};
export default shootPlayer;
