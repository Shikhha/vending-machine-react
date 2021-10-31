import Header from '../../components/Header/Header';
import CustomerPurse from '../../components/Customer/CustomerPurse';
import Products from '../../components/Product/Products';
import classes from "./App.module.css"
import Cart from "../../components/Header/Cart/Cart"
import { Fragment, useState } from 'react';
import AppProvider from "../../store/AppProvider"

function App() {
  const[isCartVisible, setCartVisible] = useState(false);

  const showCartHandler = () =>
  {
    setCartVisible(true);
  }

  const hideCartHandler = () =>
  {
    setCartVisible(false);
  }
  return (
    <AppProvider>
      {isCartVisible && <Cart onClose = {hideCartHandler}/>}
      <Header onCartVisible = {showCartHandler} />
      <div className={classes.container}><CustomerPurse />
      <Products /></div>
    </AppProvider>
  );
}

export default App;
