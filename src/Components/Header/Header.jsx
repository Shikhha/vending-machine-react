import React from "react";
import vendingImage from "../../assets/logo-vm.png";
import classes from "./Header.module.css";
import CartButton from "./Cart/CartButton";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <img src={vendingImage} alt=" Vending-Machine-Image"></img>
      <CartButton />
    </div>
  );
};

export default Header;
