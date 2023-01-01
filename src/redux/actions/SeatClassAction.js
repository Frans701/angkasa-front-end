import axios from "axios";
import { getSeatClassReducer } from "../reducers/seatClassReducer";

const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
export const getSeatClassPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${URL}/seat-class`
    );

    dispatch(getSeatClassReducer(data.data.seatClass));
  } catch (error) {
    throw error;
  }
};
