const getHtmlCollectionImg = ({ htmlCollectionImg }, name) => {
  return htmlCollectionImg.find((e) => e.name === name).html.cloneNode(true);
};
export default getHtmlCollectionImg;
