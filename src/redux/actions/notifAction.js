import axios from "axios";
import { getNotifReducer } from "../reducers/notifReducer";

const URL =
  process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";
export const getAllNotifications = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/notifications/all`);
    dispatch(getNotifReducer(data));
  } catch (error) {
    throw error;
  }
};
