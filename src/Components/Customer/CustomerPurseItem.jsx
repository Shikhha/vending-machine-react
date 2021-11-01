import React from "react";
import classes from "./CustomerPurse.module.css";
import Button from "../UI/Button";
import PropTypes from "prop-types";

const CustomerPurseItem = (props) => {
  const { coin, index } = props;
  const addCoinHandler = () => {
    coin.amount--;
    props.onAddCoin({ coin, index });
  };
  return (
    <tr key={coin.id}>
      <td className={classes["coin-value"]}>{`$${coin.value}`}</td>
      <td>{coin.amount}</td>
      <td>
        <Button disabled={coin.amount == 0} onClick={addCoinHandler}>
          Put a coin
        </Button>
      </td>
    </tr>
  );
};

CustomerPurseItem.prototype = {
  coin: PropTypes.objectOf(
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.number.isRequired
  ),
};

export default CustomerPurseItem;
