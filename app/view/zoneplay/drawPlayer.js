import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawPlayer = (objectGlobal, other = null) => {
  let ctx, Player, canvasPlay;
  if (other === null) {
    ctx = objectGlobal.ctx;
    Player = objectGlobal.Player;
    canvasPlay = objectGlobal.canvasPlay;
  } else {
    ctx = other.ctx;
    Player = other.Player;
    canvasPlay = other.canvasPlay;
  }
  //
  const playerWidth = (Player.width * canvasPlay.width) / 100;
  const playerHeight = (Player.height * canvasPlay.height) / 100;
  const playerlife = Player.life;
  //player
  ctx.strokeStyle = "black";
  ctx.strokeRect(Player.x, Player.y, playerWidth, playerHeight);
  // life
  const widthImg = playerWidth / playerlife;
  const img = getHtmlCollectionImg(objectGlobal, "playerlife");
  img.width = widthImg;
  img.height = playerHeight;
  //ctx.drawImage(img, Player.x, Player.y, playerWidth, playerHeight);
  for (let i = 0; i < playerlife; i++) {
    const positionX = Player.x + i * widthImg;
    ctx.drawImage(
      img,
      positionX,
      Player.y,
      playerWidth / playerlife,
      playerHeight
    );
  }
};

export default drawPlayer;
