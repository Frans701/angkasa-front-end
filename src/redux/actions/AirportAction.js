import axios from "../../components/axios";
import {
  getAirportPopularReducer,
  getSearchAirportReducer,
} from "../reducers/airportReducer";

const POPULAR_URL = 'airports/popular'
const SEARCH_URL = 'airports/search'
export const getAirportPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      // "https://angkasa-api-staging.km3ggwp.com/api/airports/popular"
      POPULAR_URL
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
      `${SEARCH_URL}?airport=${query}`
    );

    dispatch(getSearchAirportReducer(data));
  } catch (error) {
    throw error;
  }
};
