import React, { useContext, useState } from "react";
import AppContext from "../../../store/app-context";
import classes from "../Header.module.css";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import CartProduct from "./CartProduct";

const Cart = (props) => {
  const ctx = useContext(AppContext);
  const { products, totalAmount } = ctx;
  const totalAmt = `$${totalAmount}`;
  const cartItems = (
    <ul>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <ul>
        {[{ id: "c1", name: "sushi", amount: "2" }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={classes["action-button"]}>
        <Button
          className={classes["action-button_close"]}
          onClick={props.onClose}
        >
          Close
        </Button>
        {ctx.products.length > 0 && (
          <Button className={classes["action-button_order"]}>Order</Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
