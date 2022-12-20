import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFlight: [],
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
  },
});

export const { getSearchFlightReducer, fetchDataStartReducer } =
  searchFlightSlicer.actions;

export default searchFlightSlicer.reducer;
