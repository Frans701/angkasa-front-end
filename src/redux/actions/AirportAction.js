import axios from "axios";
import {
  getAirportPopularReducer,
  getSearchAirportReducer,
} from "../reducers/airportReducer";

const URL =
  process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";
export const getAirportPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/airports/popular`);

    dispatch(getAirportPopularReducer(data.data.airports));
  } catch (error) {
    throw error;
  }
};

export const getSearchPopular = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/airports/search?airport=${query}`);

    dispatch(getSearchAirportReducer(data));
  } catch (error) {
    throw error;
  }
};
