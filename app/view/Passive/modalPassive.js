import commonsPassive from "../../model/commons/commonsPassive.js";
const modalPassive = (id) => {
  const pB = commonsPassive[id];
  const modal = document.createElement("div");
  modal.setAttribute("id", "modalPassive");
  // en tete
  const header = document.createElement("header");
  const headerContent = document.createTextNode(
    "Description , click pour fermer"
  );
  header.appendChild(headerContent);
  modal.appendChild(header);
  // image
  const img = document.createElement("img");
  img.setAttribute("src", pB.image);
  img.setAttribute("alt", "bonus " + pB.name);
  modal.appendChild(img);
  //name
  const name = document.createElement("h2");
  const nameContent = document.createTextNode(pB.name);
  name.appendChild(nameContent);
  modal.appendChild(name);
  //description
  const description = document.createElement("p");
  const descriptionContent = document.createTextNode(pB.description);
  description.appendChild(descriptionContent);
  modal.appendChild(description);
  //ajouter dans la div
  document.body.appendChild(modal);
};
export default modalPassive;
