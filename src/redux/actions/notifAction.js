// import axios from "../../components/axios";
import axios from "axios";
import { getNotifReducer } from "../reducers/notifReducer";
const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
// const NOTIF_ALL = 'notifications/all';
export const getAllNotifications = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            // "https://angkasa-api-staging.km3ggwp.com/api/notifications/all"
            // NOTIF_ALL
            `${URL}/notifications/all`
        )
        dispatch(getNotifReducer(data))
    }catch (error){
        throw error;
    }
}