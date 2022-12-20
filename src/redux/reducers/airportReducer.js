import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirportPopularReducer: (state, action) => {
      state.airports = action.payload;
    },
  },
});

export const { getAirportPopularReducer } = airportSlicer.actions;

export default airportSlicer.reducer;
