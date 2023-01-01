import axios from "../../components/axios";
import { getSeatClassReducer } from "../reducers/seatClassReducer";

const SEATCLASS_URL = '/seat-class'

export const getSeatClassPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      SEATCLASS_URL
    );

    dispatch(getSeatClassReducer(data.data.seatClass));
  } catch (error) {
    throw error;
  }
};
