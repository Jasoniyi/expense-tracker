import React, { useContext } from "react";

import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GlobalContext } from "../../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className="trans-text">balance</div>
      <div className="trans-amount">
        <div className="trans-icon">
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className="amount">${amounts}</div>
      </div>
    </>
  );
};

export default Balance;
