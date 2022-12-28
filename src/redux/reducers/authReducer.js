import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: [],
  error :[],
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
    setError:(state, action) =>{
      state.error = action.payload;
    }
  },
});

export const { setToken, setUser, setError} = authSlicer.actions;
export default authSlicer.reducer;