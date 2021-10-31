import React from "react";
import vendingImage from "../../assets/logo-vm.png";
import classes from "./Header.module.css";
import CartButton from "./Cart/CartButton";

const Header = (props) => {
  return (
    <div className={classes["header-container"]}>
      <img src={vendingImage} alt=" Vending-Machine-Image"></img>
      <CartButton onClick={props.onCartVisible} />
    </div>
  );
};

export default Header;
