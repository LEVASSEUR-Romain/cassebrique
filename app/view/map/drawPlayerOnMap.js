const drawPlayerOnMap = (ctxMap, Player, Commons) => {
  const ratio = window.innerWidth / window.innerHeight;
  //console.log(Player);
  if (Player.pxMap !== 0 && Player.pyMap !== 0) {
    ctxMap.fillStyle = Commons.colorPlayerMap;
    ctxMap.beginPath();
    ctxMap.arc(
      (window.innerWidth * Player.pxMap) / 100,
      (window.innerHeight * Player.pyMap) / 100,
      (Commons.radiusPlayer * window.innerHeight * ratio) / 100,
      0,
      Math.PI * 2
    );
    ctxMap.fill();
  }
};

export default drawPlayerOnMap;
