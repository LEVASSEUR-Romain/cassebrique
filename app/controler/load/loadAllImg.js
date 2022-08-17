/**
 * return list image
 */
import loaderImageIconeSvg from "./loaderImageIconeSvg.js";
const loadAllImg = async () => {
  // list load image
  const listImage = {
    campFire: ["campfiresleep.svg", "chest.svg"],
    mapIcone: [
      "campfire.svg",
      "close.svg",
      "lvlboss.svg",
      "lvlmob.svg",
      "positiononmap.svg",
      "interrogation.svg",
    ],
    toolIcone: ["pointerclick.svg"],
    passive: [
      "passifballslow.svg",
      "passifhauteur.svg",
      "passiflargeur.svg",
      "passifradius.svg",
      "passifslow.svg",
      "passifupall.svg",
    ],
    font: ["fontmenu.svg", "fontplay.svg", "camouflage.jpg"],
    play: [
      "playlego.svg",
      "playerlife.svg",
      "ball.svg",
      "spaceBar.jpg",
      "eyes1.svg",
      "eyes2.svg",
      "eyes3.svg",
      "fusil.svg",
      "moustache.svg",
      "bouche.svg",
      "shoot.svg",
      "bomb.svg",
    ],
  };
  const listImgHtml = [];
  const nbImage = Object.values(listImage).reduce((a, b) =>
    Array.isArray(a) ? a.length + b.length : a + b.length
  );
  let nbComplet = 0;
  const loadImg = () => {
    return new Promise((resolve) => {
      for (const i in listImage) {
        listImage[i].forEach((img) => {
          loaderImageIconeSvg(i, img).then((rep) => {
            listImgHtml.push({
              name: img.match(/.+(?=\.)/)[0],
              html: rep,
            });
            nbComplet++;
            if (nbImage === nbComplet) {
              resolve("resolved");
              return listImgHtml;
            }
          });
        });
      }
    });
  };
  await loadImg();
  return listImgHtml;
};
export default loadAllImg;
