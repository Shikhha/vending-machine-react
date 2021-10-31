import Header from '../../components/Header/Header';
import CustomerPurse from '../../components/Customer/CustomerPurse';
import Products from '../../components/Product/Products';
import classes from "./App.module.css"
import Cart from "../../components/Header/Cart/Cart"
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <div className={classes.container}><CustomerPurse />
      <Products /></div>
    </Fragment>
  );
}

export default App;
