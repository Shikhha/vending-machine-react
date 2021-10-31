import React, { useState } from "react";
import classes from "./Product.module.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
  return (
    <Card className={classes["product-card__container"]}>
      <Card.Header as="h5"> {props.product.name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <span className={classes["product-card__title"]}>
            {`${props.product.amount} left`}
          </span>
        </Card.Title>
        <Card.Text>{`$${props.product.price}`}</Card.Text>
        <Button variant="success" className={classes.test}>
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span>Buy</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductItem.prototype = {};
export default ProductItem;
