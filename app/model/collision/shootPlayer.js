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
    const shootXRight = oneShoot.x;
    const shootXLeft = (oneShoot.width * canvasPlay.width) / 100;
    const shootYTop = oneShoot.y;
    const shootYBottom =
      oneShoot.y + (oneShoot.height * canvasPlay.height) / 100;
    // if shoot touch player
    /*     console.log(
      "r",
      shootXRight,
      "l",
      shootXLeft,
      "b",
      shootYBottom,
      "top",
      shootYTop
    );
    console.log(
      "rP",
      Player.x,
      "lP",
      Player.x + playerWidth,
      "bP",
      Player.y,
      "tP",
      Player.y + playerHeight
    ); */
    console.log(shootXRight > Player.x, shootXLeft < Player.x + playerWidth);
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
    if (shootYBottom > canvasPlay.height) {
      deleteShoot(oneShoot, Shoot);
    }
  });
};
export default shootPlayer;
