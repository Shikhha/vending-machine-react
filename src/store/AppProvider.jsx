import AppContext from "./App-context";
import { useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_DEPOSIT,
  SET_CHANGE,
} from "../data/Constants";

const AppProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: [],
    removedProducts: [],
    totalAmount: 0,
    deposit: 0,
    change: 0,
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
  const setChangeHandler = (change) => {
    cartDispatch({ type: SET_CHANGE, change });
  };

  const appContext = {
    products: cartState.products,
    removedProducts: cartState.removedProducts,
    totalAmount: cartState.totalAmount,
    deposit: cartState.deposit,
    change: cartState.change,
    addProduct: addProductsToCartHandler,
    removeProduct: removeProductsToCartHandler,
    addDeposit: addDepositHandler,
    setChange: setChangeHandler,
  };
  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
