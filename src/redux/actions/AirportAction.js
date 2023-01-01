// import axios from "../../components/axios";
import axios from "axios";
import {
  getAirportPopularReducer,
  getSearchAirportReducer,
} from "../reducers/airportReducer";

// const POPULAR_URL = 'airports/popular'
// const SEARCH_URL = 'airports/search'
const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
export const getAirportPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      // "https://angkasa-api-staging.km3ggwp.com/api/airports/popular"
      // POPULAR_URL
      `${URL}/airports/popular`
    );

    dispatch(getAirportPopularReducer(data.data.airports));
  } catch (error) {
    throw error;
  }
};

export const getSearchPopular = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      // `https://angkasa-api-staging.km3ggwp.com/api/airports/search?airport=${query}`
      // `${SEARCH_URL}?airport=${query}`
      `${URL}airports/search?airport=${query}`
    );

    dispatch(getSearchAirportReducer(data));
  } catch (error) {
    throw error;
  }
};
