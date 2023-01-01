import axios from "../../components/axios";
import { setToken, setUser, setError } from "../reducers/authReducer";

const LOGIN_URL='/login'
const REGISTER_URL = '/register'
const GETME_URL = '/me'
const UPDATE_URL = 'update-profile'

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      // process.env.REACT_APP_BASE_URL,
      LOGIN_URL,
      data
    );
    if (response.data.data.token) {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("role", response.data.data.user.role);
      dispatch(setToken(response.data.data.token));
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post(REGISTER_URL, data);
    if (response.data.data.token) {
      localStorage.setItem("token", response.data.data.token);
      dispatch(setToken(response.data.data.token));
    }
  } catch (error){
    dispatch(setError(error.response.data.errors))
    console.log("ERROR", error.response.data.errors);
  }
};

export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(
      GETME_URL,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setUser(response.data.data.user));
  } catch (error) {
    // eslint-disable-next-line
    if ((error.response.status = 401)) {
      localStorage.removeItem("token");
      dispatch(setToken(null));
    }
  }
};

export const update = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.put(
      "https://angkasa-api-staging.km3ggwp.com/api/update-profile",
      { fullname: data.fullname, username: data.username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(setUser(response.data.data.user));
  } catch (error) {
    // console.log(error.message);
    alert("error");
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  dispatch(setToken(null));
  dispatch(setUser(null));
};
