import React from "react";
import classes from "./Product.module.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
  const { product, index } = props;
  const isEmpty = product.amount - product.chosen;
  const addproductHandler = () => {
    product.chosen = product.chosen + 1;
    props.onBuy({ product, index });
  };
  return (
    <Card className={classes["product-card__container"]}>
      <Card.Header as="h5"> {product.name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <span className={classes["product-card__title"]}>
            {`${product.amount - product.chosen} left`}
          </span>
        </Card.Title>
        <Card.Text>{`$${product.price}`}</Card.Text>
        <Button
          variant="success"
          className={classes.test}
          onClick={addproductHandler}
          disabled={!isEmpty}
        >
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span>Buy</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductItem.prototype = {};
export default ProductItem;
