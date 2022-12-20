import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
  searchAirport: null,
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirportPopularReducer: (state, action) => {
      state.airports = action.payload;
    },
    getSearchAirportReducer: (state, action) => {
      state.searchAirport = action.payload;
    },
  },
});

export const { getAirportPopularReducer, getSearchAirportReducer } =
  airportSlicer.actions;

export default airportSlicer.reducer;
