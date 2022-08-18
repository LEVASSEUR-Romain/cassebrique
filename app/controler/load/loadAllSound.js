import loaderSound from "./loaderSound.js";

const loadAllSound = async () => {
  const listSound = [
    "ballBoss.mp3",
    "ballPlayer.mp3",
    "ballWall.mp3",
    "boss1Shoot.mp3",
    "boss2Ball.mp3",
    "boss3Boom.mp3",
    "ballBrik.mp3",
    "victoire.mp3",
  ];
  const listSoundHtml = [];
  const nbSound = listSound.length;
  let nbComplet = 0;
  const loadSound = () => {
    return new Promise((resolve) => {
      listSound.forEach((soundExtend) => {
        loaderSound(soundExtend).then((rep) => {
          listSoundHtml.push({
            name: soundExtend.match(/.+(?=\.)/)[0],
            html: rep,
          });
          nbComplet++;
          if (nbSound === nbComplet) {
            resolve("resolved");
            return listSoundHtml;
          }
        });
      });
    });
  };
  await loadSound();
  return listSoundHtml;
};
export default loadAllSound;
