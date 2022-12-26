import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  token : localStorage.getItem("token")
};

const notifSlicer = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    getNotifReducer: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { getNotifReducer } = notifSlicer.actions;

export default notifSlicer.reducer;