import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../store/App-context";
import classes from "./Product.module.css";
import ProductItem from "./ProductItems";
import AVAILABLE_PRODUCTS from "../../data/AvailableProducts";
import useArray from "../../hooks/UseArray";
import { findIndex } from "../../helpers/ArrayCalculations";

const Products = () => {
  const [disablePurchase, setDisablePurchase] = useState(false);
  const {
    array: productList,
    set,
    push,
    remove,
    update,
  } = useArray(AVAILABLE_PRODUCTS);
  const ctx = useContext(AppContext);
  useEffect(() => {
    const { removedProducts } = ctx;
    if (removedProducts) {
      removedProducts.map((product) => {
        const index = findIndex(productList, product);
        product.amount = product.amount + product.chosen;
        product.chosen = 0;
      });
      if (ctx.deposit <= 0) {
        setDisablePurchase(true);
      } else {
        setDisablePurchase(false);
      }
    }
  }, [ctx.removedProducts, ctx.deposit]);

  const updateProductsHandler = ({ product, index }) => {
    update(index, product);
    ctx.addProduct(product);
    const deposit = ctx.deposit - product.price;
    if (deposit <= 0) {
      setDisablePurchase(true);
    }
    ctx.addDeposit(deposit);
  };
  return (
    <div className={classes["product-container"]}>
      <h1>Products</h1>
      <div className={classes["product-container_list"]}>
        {productList.map((item, index) => (
          <ProductItem
            key={item.id}
            onBuy={updateProductsHandler}
            product={item}
            index={index}
            disablePurchase={disablePurchase}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
