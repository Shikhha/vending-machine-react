import React, { Component } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

const Deposit = () => {
  let deposit = 16;
  return (
    <Card>
      <h3>Your Deposit: {deposit}</h3>
      <Button>Make a purchase</Button>
    </Card>
  );
};

export default Deposit;
