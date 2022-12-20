import axios from "axios";

import { getSeatClassReducer } from "../reducers/seatClassReducer";

export const getSeatClassPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://angkasa-api-staging.km3ggwp.com/api/seat-class"
    );

    dispatch(getSeatClassReducer(data.data.seatClass));
  } catch (error) {
    throw error;
  }
};
