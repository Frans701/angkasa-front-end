import axios from "axios";

import {
  getSearchFlightReducer,
  getFlightReducer,
} from "../reducers/flightReducer";

export const getSearchFlight =
  (departure, arrival, date, seatClass) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://angkasa-api-staging.km3ggwp.com/api/flights/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
      );

      dispatch(getSearchFlightReducer(data.data.flights));
    } catch (error) {
      throw error;
    }
  };

export const getFlight = (flightId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://angkasa-api-staging.km3ggwp.com/api/flights/${flightId}`
    );

    dispatch(getFlightReducer(data.data.flight));
  } catch (error) {
    throw error;
  }
};
