const getHtmlCollectionImg = ({ htmlCollectionImg }, name) => {
  return htmlCollectionImg.find((e) => e.name === name).html;
};
export default getHtmlCollectionImg;
