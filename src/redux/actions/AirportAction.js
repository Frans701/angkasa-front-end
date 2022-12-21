import axios from "axios";

import {
  getAirportPopularReducer,
  getSearchAirportReducer,
} from "../reducers/airportReducer";

export const getAirportPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://angkasa-api-staging.km3ggwp.com/api/airports/popular"
    );

    dispatch(getAirportPopularReducer(data.data.airports));
  } catch (error) {
    throw error;
  }
};

export const getSearchPopular = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://angkasa-api-staging.km3ggwp.com/api/airports/search?airport=${query}`
    );

    dispatch(getSearchAirportReducer(data));
  } catch (error) {
    throw error;
  }
};
