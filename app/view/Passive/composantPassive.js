import PassiveBonus from "../../model/Passive/PassiveBonus.js";
const composantPassive = (listRandom, Commons) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "passive");
  const height = "height:" + (90 - Commons.borderMenu) + "%";
  newDiv.setAttribute("style", height);
  //ajouter les noeuds
  listRandom.forEach((element) => {
    const pB = PassiveBonus[element];
    const addDiv = document.createElement("div");
    addDiv.setAttribute("class", "modulePassive");
    addDiv.setAttribute("data-id", element);
    // en tete
    const header = document.createElement("header");
    const headerContent = document.createTextNode(
      "Clicker pour choisir ce passif"
    );
    header.appendChild(headerContent);
    addDiv.appendChild(header);
    // image
    const img = document.createElement("img");
    img.setAttribute("src", pB.image);
    img.setAttribute("alt", "bonus " + pB.name);
    addDiv.appendChild(img);
    //name
    const name = document.createElement("h2");
    const nameContent = document.createTextNode(pB.name);
    name.appendChild(nameContent);
    addDiv.appendChild(name);
    //description
    const description = document.createElement("p");
    const descriptionContent = document.createTextNode(pB.description);
    description.appendChild(descriptionContent);
    addDiv.appendChild(description);
    //ajouter dans la div
    newDiv.appendChild(addDiv);
  });
  // ajoute le nouvel élément créé et son contenu dans le DOM
  //const currentDiv = document.getElementById("div1");
  document.body.appendChild(newDiv);
};
export default composantPassive;
