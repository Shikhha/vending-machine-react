import React, { useState, useContext } from "react";
import AppContext from "../../store/app-context";
import classes from "./Product.module.css";
import ProductItem from "../Product/ProductItems";
import AVAILABLE_PRODUCTS from "../../Data/AvailableProducts";
import useArray from "../../hooks/useArray";

const Products = () => {
  const { array: productList, set, update } = useArray(AVAILABLE_PRODUCTS);
  const ctx = useContext(AppContext);

  const updateProductsHandler = ({ product, index }) => {
    update(index, product);
    ctx.addProduct(product);
  };
  return (
    <div className={classes["product-container"]}>
      <h1>Products</h1>
      <div className={classes["product-container_list"]}>
        {productList.map((item, index) => (
          <ProductItem
            onBuy={updateProductsHandler}
            product={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
