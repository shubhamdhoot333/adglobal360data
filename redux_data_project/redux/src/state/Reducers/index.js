import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";

const reducre = combineReducers({
  amount: AmountReducer,
});
export default reducre;
