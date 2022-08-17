import modalPassive from "../../view/passive/modalPassive.js";
import deleteModalPassive from "../../view/passive/deleteModalPassive.js";

const clickOnPassifMenu = (objectGlobal) => {
  const passiveMenu = document.querySelector(".passiveMenu");
  const closeModal = () => {
    deleteModalPassive();
    //modal.removeEventListener("click", closeModal);
  };

  const clickMenuPassive = (event) => {
    const idClick = event.target.dataset.id;
    // not id equal 0
    if (idClick) {
      const modal = document.querySelector("#modalPassive");
      if (modal === null) {
        modalPassive(idClick, objectGlobal);
        const modal = document.querySelector("#modalPassive");
        modal.addEventListener("click", closeModal);
      }
    }
  };
  // lister
  passiveMenu.addEventListener("click", clickMenuPassive);
};
export default clickOnPassifMenu;
