import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    rootReducers,
    auth : authReducer,
  }
  //   devTools: process.env.NODE_ENV === "development",
});

export default store;
