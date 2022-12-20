import { combineReducers } from "@reduxjs/toolkit";
import airportReducer from "./airportReducer";
import seatClassReducer from "./seatClassReducer";

export default combineReducers({
  airport: airportReducer,
  seatClass: seatClassReducer,
});
