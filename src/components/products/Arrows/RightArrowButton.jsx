import React from "react";
import { images } from "../../../assets/Imports/images";
function RightArrowButton( onClick, onDisable ) {
  return (
    <img
      src={images.arrowRight}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
    />
  );
}

export default RightArrowButton;
