import { combineReducers } from "@reduxjs/toolkit";
import airportReducer from "./airportReducer.js ";

export default combineReducers({
  airport: airportReducer,
});
