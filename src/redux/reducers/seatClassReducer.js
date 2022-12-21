import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatClass: [],
};

const seatClassSlicer = createSlice({
  name: "seatClass",
  initialState,
  reducers: {
    getSeatClassReducer: (state, action) => {
      state.seatClass = action.payload;
    },
  },
});

export const { getSeatClassReducer } = seatClassSlicer.actions;

export default seatClassSlicer.reducer;
