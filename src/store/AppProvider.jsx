import AppContext from "./app-context";
import { useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";
import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_DEPOSIT } from "../Data/Constants";

const AppProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: [],
    removedProducts: [],
    totalAmount: 0,
    deposit: 0,
  });
  const addProductsToCartHandler = (product) => {
    cartDispatch({ type: ADD_PRODUCT, product });
  };
  const removeProductsToCartHandler = (id) => {
    cartDispatch({ type: REMOVE_PRODUCT, id });
  };
  const addDepositHandler = (deposit) => {
    cartDispatch({ type: ADD_DEPOSIT, deposit });
  };

  const appContext = {
    products: cartState.products,
    removedProducts: cartState.removedProducts,
    totalAmount: cartState.totalAmount,
    deposit: cartState.deposit,
    addProduct: addProductsToCartHandler,
    removeProduct: removeProductsToCartHandler,
    addDeposit: addDepositHandler,
  };
  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
