import axios from "axios";
import { setToken, setUser, setError } from "../reducers/authReducer";

const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${URL}/login`,
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

export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(
      `${URL}/me`,
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
      `${URL}/update-profile`,
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
