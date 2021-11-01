import React, { useContext } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import AppContext from "../../../store/app-context";

const Deposit = () => {
  const ctx = useContext(AppContext);
  const { deposit } = ctx;
  return (
    <Card>
      <h3>Your Deposit: {deposit}</h3>
    </Card>
  );
};

export default Deposit;
