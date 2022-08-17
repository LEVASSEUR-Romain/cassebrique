import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const drawBoss1 = (objectGlobal, other = null) => {
  const { ctx, Boss, canvasPlay } = other === null ? objectGlobal : other;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  const witdhEyes = (10 * bossWidth) / 100;
  const borderEyes = (8 * bossWidth) / 100;
  const witdhFusil = (20 * bossWidth) / 100;
  // font
  const ptrn = ctx.createPattern(
    getHtmlCollectionImg(objectGlobal, "camouflage"),
    "repeat"
  );
  ctx.fillStyle = ptrn;
  ctx.fillRect(Boss.x, Boss.y, bossWidth, bossHeight);
  //eyes
  const imgEyes = getHtmlCollectionImg(objectGlobal, "eyes2");
  ctx.drawImage(imgEyes, Boss.x + borderEyes, Boss.y, witdhEyes, bossHeight);
  ctx.drawImage(
    imgEyes,
    Boss.x + bossWidth - witdhEyes - borderEyes,
    Boss.y,
    witdhEyes,
    bossHeight
  );
  // zone mitrailler
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "fusil"),
    Boss.x + bossWidth / 2 - witdhFusil / 2,
    Boss.y,
    witdhFusil,
    bossHeight
  );
};
export default drawBoss1;
