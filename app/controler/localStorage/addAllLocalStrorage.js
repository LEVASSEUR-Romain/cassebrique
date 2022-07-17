import addLocalStrorage from "./addLocalStrorage.js";

const addAllLocalStrorage = ({
  map,
  Player,
  Commons,
  Ball,
  itemMapPosition,
}) => {
  addLocalStrorage(map, "map");
  addLocalStrorage(Player, "player");
  addLocalStrorage(Commons, "commons");
  addLocalStrorage(Ball, "ball");
  addLocalStrorage(itemMapPosition, "mapItem");
};
export default addAllLocalStrorage;
