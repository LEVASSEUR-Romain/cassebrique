import getHtmlCollectionImg from "../../../controler/objetGlobalchange/getHtmlCollectionImg.js";

const drawBoss3 = (objectGlobal) => {
  const { ctx, Boss, canvasPlay } = objectGlobal;
  const bossWidth = (Boss.width * canvasPlay.width) / 100;
  const bossHeight = (Boss.height * canvasPlay.height) / 100;
  const heightEyes = (20 * bossHeight) / 100;
  const borderEyes = (6 * bossHeight) / 100;
  const heightMoustache = (30 * bossHeight) / 100;
  //font
  ctx.fillStyle = Boss.color;
  ctx.fillRect(Boss.x, Boss.y, bossWidth, bossHeight);
  // eyes
  const imgEyes = getHtmlCollectionImg(objectGlobal, "eyes3");
  ctx.drawImage(imgEyes, Boss.x, Boss.y + borderEyes, bossWidth, heightEyes);
  ctx.drawImage(
    imgEyes,
    Boss.x,
    Boss.y + bossHeight - borderEyes - heightEyes,
    bossWidth,
    heightEyes
  );
  // moustache
  ctx.drawImage(
    getHtmlCollectionImg(objectGlobal, "moustache"),
    Boss.x,
    Boss.y + bossHeight / 2 - heightMoustache / 2,
    bossWidth,
    heightMoustache
  );
  /*   ctx.drawImage(
    imgEyes,
    Boss.x + bossWidth - witdhEyes - borderEyes,
    Boss.y,
    bossWidth,
    bossHeight
  ); */
};
export default drawBoss3;
