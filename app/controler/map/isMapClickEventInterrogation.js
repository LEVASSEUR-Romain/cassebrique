const isMapClickEventInterrogation = (
  event,
  { itemMapInterrogation, canvasMap, Commons, ctxMap }
) => {
  const clickX = event.layerX;
  const clickY = event.layerY;

  const radiusElmt = (itemMapInterrogation.radius * canvasMap.height) / 100;
  const radius = (itemMapInterrogation.radius * canvasMap.height) / 100;
  const px = (itemMapInterrogation.px * canvasMap.width) / 100;
  const py = (itemMapInterrogation.py * canvasMap.height) / 100;

  const elmtRight = (canvasMap.width * itemMapInterrogation.px) / 100;
  const elmtLeft =
    (canvasMap.width * itemMapInterrogation.px) / 100 + 2 * radiusElmt;
  const elemTop = (canvasMap.height * itemMapInterrogation.py) / 100;
  const elemBottom =
    (canvasMap.height * itemMapInterrogation.py) / 100 + 2 * radiusElmt;
  /*  
debug
 ctxMap.fillStyle = "red";
  ctxMap.fillRect(
    elmtRight,
    elemTop,
    elmtLeft - elmtRight,
    elemBottom - elemTop
  ); */
  if (
    clickX > elmtRight &&
    clickX < elmtLeft &&
    clickY > elemTop &&
    clickY < elemBottom
  ) {
    return true;
  }
  return false;
};
export default isMapClickEventInterrogation;
