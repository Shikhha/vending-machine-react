import Header from '../../components/Header/Header';
import CustomerPurse from '../../components/Customer/CustomerPurse';
import classes from "./App.module.css"
import Deposit from '../../components/Customer/Deposit/Deposit';

function App() {
  return (
    <div>
      <Header />
      <div className={classes.container}><CustomerPurse />
      <CustomerPurse /></div>
    </div>
  );
}

export default App;
