import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: [],
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // setRole:(state, action)=>{
    //     state.role = action.payload;
    // },
  },
});

export const { setToken, setUser, setRole } = authSlicer.actions;
export default authSlicer.reducer;
