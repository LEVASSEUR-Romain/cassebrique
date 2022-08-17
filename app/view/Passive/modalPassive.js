import commonsPassive from "../../model/commons/commonsPassive.js";
import component from "../tools/component.js";
import getHtmlCollectionImg from "../../controler/objetGlobalchange/getHtmlCollectionImg.js";
const modalPassive = (id, objectGlobal) => {
  const pB = commonsPassive[id];
  const height = "height:" + (100 - objectGlobal.Commons.borderMenu) + "%";
  const modal = component(
    "div",
    { id: "modalPassive", style: height },
    document.body
  );
  // info close
  const info = component("div", {}, modal);
  const imgClose = getHtmlCollectionImg(objectGlobal, "pointerclick");
  imgClose.setAttribute("alt", "fermer page");
  imgClose.setAttribute("height", "50px");
  imgClose.setAttribute("width", "50px");
  info.appendChild(imgClose);
  component("p", {}, info, "pour fermer");
  //describe
  const img = getHtmlCollectionImg(objectGlobal, pB.image);
  img.alt = "bonus " + pB.name;
  modal.appendChild(img);
  component("h2", {}, modal, pB.name);
  component("p", {}, modal, pB.description);
};
export default modalPassive;
