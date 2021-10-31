import React from "react";
import classes from "../Header.module.css";
import Modal from "../../UI/Modal";
const Cart = (props) => {
  return (
    <Modal>
      <ul>
        {[{ id: "c1", name: "sushi", amount: "2" }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
