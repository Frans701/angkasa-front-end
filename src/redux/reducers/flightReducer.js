import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFlight: [],
  flight: [],
  price: "",
  isFetching: true,
};

const searchFlightSlicer = createSlice({
  name: "flight",
  initialState,
  reducers: {
    getSearchFlightReducer: (state, action) => {
      state.searchFlight = action.payload;
      state.isFetching = false;
    },
    getFlightReducer: (state, action) => {
      const { price, flight } = action.payload;
      state.flight = flight;
      state.price = price;
    },
  },
});

export const { getSearchFlightReducer, getFlightReducer } =
  searchFlightSlicer.actions;

export default searchFlightSlicer.reducer;
