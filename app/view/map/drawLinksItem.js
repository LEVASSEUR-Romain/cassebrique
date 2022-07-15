const drawLinksItem = ({ ctxMap, itemMapLinks, Commons, canvasMap }) => {
  itemMapLinks.forEach((elmt) => {
    ctxMap.beginPath();
    ctxMap.fillStyle = Commons.colorLinksMap;
    ctxMap.lineWidth = (Commons.widthLinksMap * window.innerWidth) / 100;
    ctxMap.moveTo(
      (elmt.pix * canvasMap.width) / 100,
      (elmt.piy * canvasMap.height) / 100
    );
    ctxMap.lineTo(
      (elmt.pfx * canvasMap.width) / 100,
      (elmt.pfy * canvasMap.height) / 100
    );
    ctxMap.stroke();
  });
};
export default drawLinksItem;
