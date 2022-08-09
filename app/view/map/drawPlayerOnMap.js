import loaderImageIconeSvg from "../loaderimage/loaderImageIconeSvg.js";

const drawPlayerOnMap = ({ ctxMap, Player, Commons, canvasMap }) => {
  if (Player.pxMap !== 0 && Player.pyMap !== 0) {
    ctxMap.fillStyle = Commons.colorPlayerMap;
    ctxMap.beginPath();
    ctxMap.arc(
      (canvasMap.width * Player.pxMap) / 100,
      (canvasMap.height * Player.pyMap) / 100,
      (Commons.radiusPlayer * canvasMap.height) / 100,
      //(Commons.radiusPlayer * canvasMap.height * ratio) / 100,
      0,
      Math.PI * 2
    );
    ctxMap.fill();
    /*   // test
  Player.pxMap = 0;
  Player.pyMap = 0;
  const positionX = (canvasMap.width * Player.pxMap) / 100;
  const positionY = (canvasMap.height * Player.pyMap) / 100;
  const radius = (Commons.radiusPlayer * canvasMap.height) / 100;
  console.log(positionX, positionY);
  // icone
  const angle = -Math.PI / 4;
  const imgPositionX = positionX;
  const imgPositionY = positionY;
  loaderImageIconeSvg("positiononmap").then((rep) => {
    ctxMap.save();
    ctxMap.rotate(angle);
    ctxMap.translate(positionX, positionY);
    ctxMap.drawImage(rep, imgPositionX, imgPositionY, radius * 2, radius * 2);
    ctxMap.restore();
  }); */
  }
};

export default drawPlayerOnMap;
