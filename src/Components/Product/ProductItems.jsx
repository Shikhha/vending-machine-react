import React from "react";
import classes from "./Product.module.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";

const ProductItem = (props) => {
  const { product, index, disablePurchase } = props;
  const isEmpty = product.amount - product.chosen;
  const addproductHandler = () => {
    product.amount = product.amount - 1;
    product.chosen = product.chosen + 1;
    props.onBuy({ product, index });
  };
  return (
    <Card className={classes["product-card__container"]}>
      <Card.Header as="h5"> {product.name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <span className={classes["product-card__title"]}>
            {`${product.amount} left`}
          </span>
        </Card.Title>
        <Card.Text>{`$${product.price}`}</Card.Text>
        <Button
          variant="success"
          className={classes.test}
          onClick={addproductHandler}
          disabled={!isEmpty || disablePurchase}
        >
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span>Buy</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductItem.prototype = {
  product: PropTypes.objectOf(
    PropTypes.string.isRequired,
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.number.isRequired,
    PropTypes.number.isRequired
  ),
};
export default ProductItem;
