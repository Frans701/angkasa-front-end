import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFlight: [],
  flight: [],
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
      state.flight = action.payload;
    },
  },
});

export const { getSearchFlightReducer, getFlightReducer } =
  searchFlightSlicer.actions;

export default searchFlightSlicer.reducer;
