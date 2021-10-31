import React, { useState } from "react";
import classes from "./Product.module.css";
import ProductItem from "../Product/ProductItems";
import AVAILABLE_PRODUCTS from "../../Data/AvailableProducts";

const Products = () => {
  let [productList, setProductList] = useState(AVAILABLE_PRODUCTS);

  return (
    <div className={classes["product-container"]}>
      <h1>Products</h1>
      <div className={classes["product-container_list"]}>
        {productList.map((item) => (
          <ProductItem product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
