const composantLose = () => {
  const addDiv = document.createElement("div");
  addDiv.setAttribute("id", "lose");

  // en tete
  const header = document.createElement("header");
  const headerContent = document.createTextNode("Vous avez perdu");
  header.appendChild(headerContent);
  addDiv.appendChild(header);
  // logo
  const logoLose = document.createElement("h2");
  const logoContent = document.createTextNode("😒");
  logoLose.appendChild(logoContent);
  addDiv.appendChild(logoLose);
  //describe
  const p = document.createElement("p");
  const pContent = document.createTextNode(
    "Pour recommencer rafraichir la page (F5)"
  );
  p.appendChild(pContent);
  addDiv.appendChild(p);
  //add div final
  document.body.appendChild(addDiv);
};
export default composantLose;
