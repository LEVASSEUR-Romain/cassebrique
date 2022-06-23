const drawBackgroundMap = (ctxMap, Commons) => {
  ctxMap.fillStyle = Commons.backgroundMap;
  ctxMap.fillRect(0, 0, window.innerWidth, window.innerHeight);
};
export default drawBackgroundMap;
