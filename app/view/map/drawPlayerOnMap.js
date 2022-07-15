const drawPlayerOnMap = ({ ctxMap, Player, Commons, canvasMap }) => {
  const ratio = canvasMap.width / canvasMap.height;
  //console.log(Player);
  if (Player.pxMap !== 0 && Player.pyMap !== 0) {
    ctxMap.fillStyle = Commons.colorPlayerMap;
    ctxMap.beginPath();
    ctxMap.arc(
      (canvasMap.width * Player.pxMap) / 100,
      (canvasMap.height * Player.pyMap) / 100,
      (Commons.radiusPlayer * canvasMap.height * ratio) / 100,
      0,
      Math.PI * 2
    );
    ctxMap.fill();
  }
};

export default drawPlayerOnMap;
