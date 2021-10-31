import React, { Fragment } from "react";
import vendingImage from "../../assets/logo-vm.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={vendingImage} alt=" Vending-Machine-Image"></img>
    </div>
  );
};

export default Header;
