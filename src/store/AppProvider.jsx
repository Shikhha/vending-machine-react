import AppContext from "./app-context";
import { useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../Data/Constants";

const AppProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: [],
    totalAmount: 0,
  });
  const addProductsToCartHandler = (product) => {
    console.log("Product :", product);
    cartDispatch({ type: ADD_PRODUCT, product });
  };
  const removeProductsToCartHandler = (id) => {
    cartDispatch({ type: REMOVE_PRODUCT, id });
  };

  const appContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductsToCartHandler,
    removeProduct: removeProductsToCartHandler,
  };
  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
