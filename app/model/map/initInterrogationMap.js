const initInterrogationMap = (Commons, canvasMap) => {
  const pourcentageBorder = Commons.interrogationBorder;
  const pourcentageRadius = Commons.interrogationRadius;
  const borderLeft = (pourcentageBorder * canvasMap.width) / 100;
  const radius = (pourcentageRadius * canvasMap.height) / 100;
  const px = pourcentageBorder;
  const py =
    ((canvasMap.height - radius * 2 - borderLeft) / canvasMap.height) * 100;
  return {
    px: px,
    py: py,
    radius: pourcentageRadius,
    type: "interrogation",
  };
};
export default initInterrogationMap;
