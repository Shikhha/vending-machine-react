import React, { Component } from "react";
import CartIcon from "./CartIcon";
import classes from "../Header.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
