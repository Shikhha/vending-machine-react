import AppContext from "./app-context";

const AppProvider = (props) => {
  const addProductsToCartHandler = (product) => {};
  const removeProductsToCartHandler = (id) => {};

  const appContext = {
    products: [],
    totalAmount: 0,
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
