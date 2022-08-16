import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawBoss2 = (objectGlobal) => {
  const { ctx, Boss, canvasPlay } = objectGlobal;
  ctx.fillStyle = Boss.color;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  const witdhEyes = (10 * bossWidth) / 100;
  const borderEyes = (8 * bossWidth) / 100;
  const witdhBouche = (20 * bossWidth) / 100;

  ctx.fillRect(Boss.x, Boss.y, bossWidth, bossHeight);
  // eyes
  const imgEyes = getHtmlCollectionImg(objectGlobal, "eyes1");
  ctx.drawImage(imgEyes, Boss.x + borderEyes, Boss.y, witdhEyes, bossHeight);
  ctx.drawImage(
    imgEyes,
    Boss.x + bossWidth - witdhEyes - borderEyes,
    Boss.y,
    witdhEyes,
    bossHeight
  );
  //bouche
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "bouche"),
    Boss.x + bossWidth / 2 - witdhBouche / 2,
    Boss.y,
    witdhBouche,
    bossHeight
  );
};
export default drawBoss2;
