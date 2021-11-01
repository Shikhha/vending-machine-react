import React, { Fragment } from "react";
import classes from "../Header.module.css";
import Button from "../../UI/Button";
import { ListGroup } from "react-bootstrap";

const CartProduct = (props) => {
  const { name, price, chosen } = props.product;
  const totalPrice = price * chosen;
  return (
    <Fragment>
      <ListGroup.Item>
        <div className={classes["cart-product"]}>
          <h2>{`${name} x ${chosen}`}</h2>
          <div>
            <span>{totalPrice}</span>
          </div>
          <div>
            <Button
              className={classes["cart-product_action"]}
              onClick={props.onRemove}
            >
              Remove
            </Button>
          </div>
        </div>
      </ListGroup.Item>
    </Fragment>
  );
};

export default CartProduct;
