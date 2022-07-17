import commonsDescribeBoss from "../../model/commons/commonsDescribeBoss.js";

const composantBossShow = (Commons, nbrBoss) => {
  // const commun boss
  const paramsBoss = commonsDescribeBoss["boss" + nbrBoss];
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "boss");
  const height = "height:" + (100 - Commons.borderMenu) + "%";
  newDiv.setAttribute("style", height);
  // Go H1
  const addDiv = document.createElement("h1");
  const h1Content = document.createTextNode(paramsBoss.title);
  addDiv.appendChild(h1Content);
  newDiv.appendChild(addDiv);
  // Go P
  const addP = document.createElement("p");
  const pDescribe = document.createTextNode(paramsBoss.describe);
  addP.appendChild(pDescribe);
  newDiv.appendChild(addP);
  // go P info
  const addPInfo = document.createElement("p");
  const pDescribeInfo = document.createTextNode(commonsDescribeBoss.info);
  addPInfo.appendChild(pDescribeInfo);
  newDiv.appendChild(addPInfo);
  //sur all
  document.body.appendChild(newDiv);
};

export default composantBossShow;
