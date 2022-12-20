import { combineReducers } from "@reduxjs/toolkit";
import airportReducer from "./airportReducer";
import flightReducer from "./flightReducer";
import seatClassReducer from "./seatClassReducer";

export default combineReducers({
  airport: airportReducer,
  seatClass: seatClassReducer,
  flight: flightReducer,
});
