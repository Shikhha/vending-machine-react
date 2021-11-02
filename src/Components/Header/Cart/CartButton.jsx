import React, { useContext } from "react";
import AppContext from "../../../store/App-context";
import CartIcon from "./CartIcon";
import { calculateNoOfItems } from "../../../helpers/ArrayCalculations";
import classes from "../Header.module.css";

const CartButton = (props) => {
  const ctx = useContext(AppContext);
  const noOfProducts = calculateNoOfItems(ctx.products);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfProducts}</span>
    </button>
  );
};

export default CartButton;
