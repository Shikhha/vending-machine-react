import React, { useEffect, useContext, useState } from "react";
import AVAILABLE_COINS from "../../data/AvailableCoins";
import Deposit from "./Deposit/Deposit";
import classes from "./CustomerPurse.module.css";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CalculateSum } from "../../helpers/CoinCalculations";
import useArray from "../../hooks/UseArray";
import CustomerPurseItem from "./CustomerPurseItem";
import AppContext from "../../store/App-context";

const CustomerPurse = () => {
  const ctx = useContext(AppContext);
  const { array: coinList, update } = useArray(AVAILABLE_COINS);
  let [coinsSum, setCoinsSum] = useState(CalculateSum(AVAILABLE_COINS));
  let [deposit, setDeposit] = useState(0);

  useEffect(() => {
    const deposit = 90 - coinsSum;
    setDeposit(deposit);
    ctx.addDeposit(deposit);
  }, [coinsSum]);

  const addDepositHandler = ({ coin, index }) => {
    update(index, coin);
    setCoinsSum(CalculateSum(coinList));
  };

  return (
    <div className={classes["purse-container"]}>
      <h1>Customer Purse</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
            </th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin, index) => (
            <CustomerPurseItem
              key={`${coin.id}index`}
              coin={coin}
              index={index}
              onAddCoin={addDepositHandler}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Sum: {coinsSum}</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </Table>
      <Deposit />
    </div>
  );
};

export default CustomerPurse;
