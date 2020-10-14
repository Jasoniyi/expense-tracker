import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Expence = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const expence =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  // calculate percentage
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const expenceTotal = (expence / total) * 100;

  return (
    <>
      <div className="trans-text">expence</div>
      <div className="trans-amount">
        <div className="trans-icon">
          <FontAwesomeIcon icon={faCalculator} />
        </div>
        <div className="amount">${expence}</div>
        <div className="trans-percent">{expenceTotal}%</div>
      </div>
    </>
  );
};

export default Expence;
