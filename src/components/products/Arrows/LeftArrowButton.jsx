import React from "react";
import { images } from "../../../assets/Imports/images";
function LeftArrowButton(onClick, onDisable) {
  return (
    <img
      src={images.arrowLeft}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
    />
  );
}

export default LeftArrowButton;
