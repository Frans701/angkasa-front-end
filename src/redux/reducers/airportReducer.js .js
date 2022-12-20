import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
  selectedFrom: {},
  selectedTo: {},
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirportPopularReducer: (state, action) => {
      state.airports = action.payload;
    },
    getSelectedFromReducer: (state, action) => {
      state.selectedFrom = action.payload;
    },
    getSelectedToReducer: (state, action) => {
      state.selectedTo = action.payload;
    },
  },
});

export const {
  getAirportPopularReducer,
  getSelectedFromReducer,
  getSelectedToReducer,
} = airportSlicer.actions;

export default airportSlicer.reducer;
