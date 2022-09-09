export const Deposite = (amount) => {
  console.log(amount);
  return (dispatch) => {
    dispatch({
      type: "Deposite",
      payload: amount,
    });
  };
};

export const Withdraw = (amount) => {
  console.log(amount);
  return (dispatch) => {
    dispatch({
      type: "Withdraw",
      payload: amount,
    });
  };
};
