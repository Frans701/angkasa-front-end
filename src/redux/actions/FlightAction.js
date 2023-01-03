import axios from "axios";
import {
  getSearchFlightReducer,
  getFlightReducer,
} from "../reducers/flightReducer";

const URL =
  process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";
export const getSearchFlight =
  (departure, arrival, date, seatClass) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${URL}/flights/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
      );

      dispatch(getSearchFlightReducer(data.data.flights));
    } catch (error) {
      throw error;
    }
  };

export const getFlight = (flightId, seatClass) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}//flights/${flightId}`);

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
