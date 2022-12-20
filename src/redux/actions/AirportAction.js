import axios from "axios";

import { getAirportPopularReducer } from "../reducers/airportReducer";

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
