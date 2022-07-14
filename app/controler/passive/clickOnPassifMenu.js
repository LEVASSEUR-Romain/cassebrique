import modalPassive from "../../view/Passive/modalPassive.js";
import deleteModalPassive from "../../view/Passive/deleteModalPassive.js";

const clickOnPassifMenu = () => {
  const passiveMenu = document.querySelector(".passiveMenu");
  //close modal
  const closeModal = () => {
    console.log("close");
    deleteModalPassive();
    //modal.removeEventListener("click", closeModal);
  };
  //click
  const clickMenuPassive = (event) => {
    console.log(event.target);
    const idClick = event.target.dataset.id;
    // not id equal 0
    if (idClick) {
      //show modale
      const modal = document.querySelector("#modalPassive");
      // multiplacation of divs
      if (modal === null) {
        modalPassive(idClick);
        const modal = document.querySelector("#modalPassive");
        modal.addEventListener("click", closeModal);
      }
    }
  };
  // lister
  passiveMenu.addEventListener("click", clickMenuPassive);
};
export default clickOnPassifMenu;
