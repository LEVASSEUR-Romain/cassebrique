const updateComposantLifeBoss = (life) => {
  const divLife = document.getElementById("bossLifeText");
  let lifeTotal = life;
  let content = "Boss vie : ";
  while (lifeTotal >= 10) {
    content += "💛";
    lifeTotal -= 10;
  }
  while (lifeTotal >= 5) {
    content += "💙";
    lifeTotal -= 5;
  }
  while (lifeTotal !== 0) {
    content += "💗";
    lifeTotal -= 1;
  }

  divLife.textContent = content;
};
export default updateComposantLifeBoss;
