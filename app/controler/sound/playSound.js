const playSound = (objectGlobal, name) => {
  const { htmlCollectionSound } = objectGlobal;
  const audio = htmlCollectionSound.find((e) => e.name === name);
  audio.html.play();
};

export default playSound;
