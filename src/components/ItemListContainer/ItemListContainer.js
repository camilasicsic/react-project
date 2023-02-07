import React from "react";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return <div className="item-list-container"> {greeting} </div>;
};

export default ItemListContainer;
