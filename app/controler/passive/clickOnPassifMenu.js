import modalPassive from "../../view/Passive/modalPassive.js";
import deleteModalPassive from "../../view/Passive/deleteModalPassive.js";

const clickOnPassifMenu = (Player) => {
  const passiveMenu = document.querySelector(".passiveMenu");
  //close modal
  const closeModal = () => {
    deleteModalPassive();
  };
  //click
  const clickMenuPassive = (event) => {
    const idClick = event.target.dataset.id;
    if (idClick) {
      //show modale
      modalPassive(idClick);
      const modal = document.querySelector("#modalPassive");
      modal.addEventListener("click", closeModal);
    }
  };
  // lister
  passiveMenu.addEventListener("click", clickMenuPassive);
};
export default clickOnPassifMenu;
