import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import airportReducer from "./reducers/airportReducer";
import authReducer from "./reducers/authReducer";
import seatClassReducer from "./reducers/seatClassReducer";
import flightReducer from "./reducers/flightReducer";


const store = configureStore({
  reducer: {
    rootReducers,
    auth : authReducer,
    airport : airportReducer,
    seatClass : seatClassReducer,
    flight : flightReducer,
  }
  //   devTools: process.env.NODE_ENV === "development",
});

export default store;
