import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial State
const initialState = {
  transactions: [{ id: 1, text: "Flower", date: "11-may-2020", amount: -20 }],
};

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //create Actions
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
