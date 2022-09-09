import React from "react";
import { useDispatch } from "react-redux";
//import { bindActionCreaters } from "redux";
import { actionCreaters } from "../state/index";
function Shop() {
  const dispatch = useDispatch();
  // const action = bindActionCreaters(actionCreaters, dispatch);
  return (
    <>
      <h1>Withdraw /deposit</h1>
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          dispatch(actionCreaters.Withdraw(100));
        }}
      >
        -
      </button>
      Updated balance
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          dispatch(actionCreaters.Deposite(100));
        }}
      >
        +
      </button>
    </>
  );
}

export default Shop;
