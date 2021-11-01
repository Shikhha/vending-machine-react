import React, { useState } from "react";
import AVAILABLE_COINS from "../../Data/AvailableCoins";
import Deposit from "./Deposit/Deposit";
import classes from "./CustomerPurse.module.css";
import Button from "../UI/Button";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CalculateSum } from "../../helpers/CoinCalculations";

const CustomerPurse = () => {
  let [coinsList, setCoinsList] = useState(AVAILABLE_COINS);
  let [coinsSum, setCoinsSum] = useState(CalculateSum(AVAILABLE_COINS));

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
          {coinsList.map((coin) => (
            <tr key={coin.id}>
              <td className={classes["coin-value"]}>{`$${coin.value}`}</td>
              <td>{coin.amount}</td>
              <td>
                <Button>Put a coin</Button>
              </td>
            </tr>
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
      <Deposit></Deposit>
    </div>
  );
};

export default CustomerPurse;
