import React, { useContext, useState } from "react";
import AppContext from "../../../store/app-context";
import classes from "../Header.module.css";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import CartProduct from "./CartProduct";
import { ListGroup } from "react-bootstrap";

const Cart = (props) => {
  const ctx = useContext(AppContext);
  const { products, totalAmount } = ctx;
  const totalAmt = `$${totalAmount}`;
  const RemoveProductHandler = (id) => {
    console.log("id: ", id);
    ctx.removeProduct(id);
  };
  return (
    <Modal onClose={props.onClose}>
      <ListGroup>
        {products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            onRemove={RemoveProductHandler}
          />
        ))}
      </ListGroup>
      <div className={classes["product-total"]}>
        <span>Total Amount: </span>
        <span className={classes["product-total_amount"]}>
          {`$${totalAmount}`}
        </span>
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
