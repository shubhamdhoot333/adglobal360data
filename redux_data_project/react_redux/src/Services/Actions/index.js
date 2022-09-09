import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const AddTocart = (data) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

const RemoveTocart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
export { AddTocart, RemoveTocart };
