import axios from "../../components/axios";

import {
  getSearchFlightReducer,
  getFlightReducer,
} from "../reducers/flightReducer";

const FLIGHT_URL = '/flights'

export const getSearchFlight =
  (departure, arrival, date, seatClass) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        // `https://angkasa-api-staging.km3ggwp.com/api/flights/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
        `${FLIGHT_URL}/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
      );

      dispatch(getSearchFlightReducer(data.data.flights));
    } catch (error) {
      throw error;
    }
  };

export const getFlight = (flightId, seatClass) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      // `https://angkasa-api-staging.km3ggwp.com/api/flights/${flightId}`
      `${FLIGHT_URL}/${flightId}`
    );

    const filteredArray = data.data.flight?.class?.filter(
      (flight) => flight.type === `${seatClass}`
    );

    dispatch(
      getFlightReducer({ flight: data.data.flight, price: filteredArray })
    );
  } catch (error) {
    throw error;
  }
};
