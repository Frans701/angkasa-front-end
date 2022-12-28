import axios from "axios";
import { setToken, setUser, setError } from "../reducers/authReducer";

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://angkasa-api-staging.km3ggwp.com/api/login",
      data
    );
    if (response.data.data.token) {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("role", response.data.data.user.role);
      dispatch(setToken(response.data.data.token));
    }
  } catch (error) {
    dispatch(setError(error.response.data.message))
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://angkasa-api-staging.km3ggwp.com/api/register",
      data
    );
    if (response.data.data.token) {
      localStorage.setItem("token", response.data.data.token);
      dispatch(setToken(response.data.data.token));
    }
  } catch (error) {
    dispatch(setError(error.response.data.errors));
  }
};

export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(
      "https://angkasa-api-staging.km3ggwp.com/api/me",
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

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  dispatch(setToken(null));
  dispatch(setUser(null));
};
