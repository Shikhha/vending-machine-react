import React, { useContext, useState } from "react";
import AppContext from "../../../store/App-context";
import classes from "../Header.module.css";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import CartProduct from "./CartProduct";
import { ListGroup } from "react-bootstrap";

const Cart = (props) => {
  const [isOrderPlaced, setOrderPlaced] = useState(false);
  const ctx = useContext(AppContext);
  const { products, totalAmount, deposit } = ctx;
  const totalAmt = `$${totalAmount}`;
  const RemoveProductHandler = ({ id, totalPrice }) => {
    ctx.removeProduct(id);
    ctx.addDeposit(ctx.deposit + totalPrice);
  };
  const orderPlacedHandler = () => {
    ctx.setChange(deposit);
    ctx.addDeposit(0);
    setOrderPlaced(true);
  };
  return (
    <Modal onClose={props.onClose}>
      <ListGroup>
        {products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            onRemove={RemoveProductHandler}
            isOrderPlaced={isOrderPlaced}
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
        {ctx.products.length > 0 && !isOrderPlaced && (
          <Button
            className={classes["action-button_order"]}
            onClick={orderPlacedHandler}
          >
            Order
          </Button>
        )}
        {isOrderPlaced && (
          <h3 className={classes["action-button_order_text"]}>
            Order Placed, Collect your change !
          </h3>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
