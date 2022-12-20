import axios from "axios";

import { getSearchFlightReducer } from "../reducers/flightReducer";

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
