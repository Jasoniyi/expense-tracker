import React from "react";

const dasboardMostExpenses = () => {
  return (
    <div className="container dashboard-most-expense">
      <div className="most-expense-title">
        <h2>Categories with Biggest Expense</h2>
      </div>
      <div>
        <ul className="most-expense-row">
          <li className="most-expense-box">
            <div className="most-expense-list-icon" />
            <div className="most-expense-list-title">Card Purchase</div>
            <div className="most-expense-list-price">$100</div>
          </li>
          <li className="most-expense-box">col2</li>
          <li className="most-expense-box">col3</li>
          <li className="most-expense-box">col4</li>
          <li className="most-expense-box">col5</li>
          <li className="most-expense-box">col6</li>
          <li className="most-expense-box">col7</li>
          <li className="most-expense-box">col8</li>
          <li className="most-expense-box">col9</li>
          <li className="most-expense-box">col10</li>
          <li className="most-expense-box">col11</li>
        </ul>
      </div>
    </div>
  );
};

export default dasboardMostExpenses;
