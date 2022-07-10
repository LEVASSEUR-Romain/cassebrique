const propertiesCss = (div, prop, type = "") => {
  if (type === "") {
    return document.defaultView
      .getComputedStyle(div, null)
      .getPropertyValue(prop);
  }
  if (type === "int") {
    return parseInt(
      document.defaultView.getComputedStyle(div, null).getPropertyValue(prop)
    );
  }
};
export default propertiesCss;
