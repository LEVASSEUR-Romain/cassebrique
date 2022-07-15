const drawBackgroundMap = ({ ctxMap, Commons, canvasMap }) => {
  ctxMap.fillStyle = Commons.backgroundMap;
  ctxMap.fillRect(0, 0, canvasMap.width, canvasMap.height);
};
export default drawBackgroundMap;
