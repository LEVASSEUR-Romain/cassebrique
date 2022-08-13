import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawLinksItem = (objectGlobal) => {
  const { ctxMap, itemMapLinks, Commons, canvasMap } = objectGlobal;
  itemMapLinks.forEach((elmt) => {
    const pix = (elmt.pix * canvasMap.width) / 100;
    const piy = (elmt.piy * canvasMap.height) / 100;
    const pfx = (elmt.pfx * canvasMap.width) / 100;
    const pfy = (elmt.pfy * canvasMap.height) / 100;
    const lineWidthLink = (Commons.widthLinksMap * canvasMap.height) / 100;
    // path principal
    ctxMap.beginPath();
    ctxMap.moveTo(pix, piy);
    ctxMap.lineTo(pfx, pfy);
    ctxMap.strokeStyle = Commons.colorLinksMap;
    ctxMap.lineWidth = lineWidthLink;
    ctxMap.stroke();
    ctxMap.closePath();
    // Boder left
    if (pix === pfx) {
      ctxMap.beginPath();
      ctxMap.moveTo(pix + lineWidthLink / 2, piy);
      ctxMap.lineTo(pfx + lineWidthLink / 2, pfy);
      ctxMap.strokeStyle = Commons.colorLinksMapBorder;
      ctxMap.lineWidth = 5;
      ctxMap.stroke();
      ctxMap.closePath();
    } else {
      ctxMap.beginPath();
      ctxMap.moveTo(pix, piy + lineWidthLink / 2);
      ctxMap.lineTo(pfx, pfy + lineWidthLink / 2);
      ctxMap.strokeStyle = Commons.colorLinksMapBorder;
      ctxMap.lineWidth = 5;
      ctxMap.stroke();
    }
    // boder right
    if (pix === pfx) {
      ctxMap.beginPath();
      ctxMap.moveTo(pix - lineWidthLink / 2, piy);
      ctxMap.lineTo(pfx - lineWidthLink / 2, pfy);
      ctxMap.strokeStyle = Commons.colorLinksMapBorder;
      ctxMap.lineWidth = 5;
      ctxMap.stroke();
    } else {
      ctxMap.beginPath();
      ctxMap.moveTo(pix, piy - lineWidthLink / 2);
      ctxMap.lineTo(pfx, pfy - lineWidthLink / 2);
      ctxMap.strokeStyle = Commons.colorLinksMapBorder;
      ctxMap.lineWidth = 5;
      ctxMap.stroke();
    }
    // path pointiller
    ctxMap.save();
    ctxMap.beginPath();
    ctxMap.setLineDash([8, 10]);
    ctxMap.moveTo(pix, piy);
    ctxMap.lineTo(pfx, pfy);
    ctxMap.strokeStyle = "black";
    ctxMap.lineWidth = 10;
    ctxMap.stroke();
    ctxMap.restore();
  });
};
export default drawLinksItem;
