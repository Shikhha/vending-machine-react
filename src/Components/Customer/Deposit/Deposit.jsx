import React, { useContext } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import AppContext from "../../../store/App-context";

const Deposit = () => {
  const ctx = useContext(AppContext);
  const { deposit, change } = ctx;
  return (
    <Card>
      <h3 className="p-3 m-3">Your Deposit: {deposit}</h3>
      <h3 className="p-3 m-3">Your Change: {change}</h3>
    </Card>
  );
};

export default Deposit;
