const drawLinksItem = (ctxMap, links, Commons) => {
  links.forEach((elmt) => {
    ctxMap.beginPath();
    ctxMap.fillStyle = Commons.colorLinksMap;
    ctxMap.lineWidth = (Commons.widthLinksMap * window.innerWidth) / 100;
    ctxMap.moveTo(
      (elmt.pix * window.innerWidth) / 100,
      (elmt.piy * window.innerHeight) / 100
    );
    ctxMap.lineTo(
      (elmt.pfx * window.innerWidth) / 100,
      (elmt.pfy * window.innerHeight) / 100
    );
    ctxMap.stroke();
  });
};
export default drawLinksItem;
