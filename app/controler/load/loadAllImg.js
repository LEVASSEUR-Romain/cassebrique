/**
 * return list image
 */
import loaderImageIconeSvg from "./loaderImageIconeSvg.js";
const loadAllImg = async () => {
  // list load image
  const listImage = {
    campFire: ["campfiresleep.svg", "open-chest.svg"],
    mapIcone: [
      "campfire.svg",
      "close.svg",
      "lvlboss.svg",
      "lvlmob.svg",
      "positiononmap.svg",
      "interrogation.svg",
    ],
    toolIcone: ["pointerclick.svg"],
    passive: [],
    font: ["fontmenu.svg"],
    play: ["playlego.svg"],
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
