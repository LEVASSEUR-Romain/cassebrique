/**
 *
 * @param {String} type
 * @param {Object} attribut
 * @param {HTMLElement} parent
 * @param {String} text
 * @returns Element HTML
 */

const component = (type, attribut, parent, text = "") => {
  const addDiv = document.createElement(type);
  for (const i in attribut) {
    addDiv.setAttribute(i, attribut[i]);
  }
  if (text !== "") {
    const textContent = document.createTextNode(text);
    addDiv.appendChild(textContent);
  }
  parent.appendChild(addDiv);
  return addDiv;
};
export default component;
