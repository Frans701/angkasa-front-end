import axios from "../../components/axios";
import { getNotifReducer } from "../reducers/notifReducer";

const NOTIF_ALL = 'notifications/all';
export const getAllNotifications = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            // "https://angkasa-api-staging.km3ggwp.com/api/notifications/all"
            NOTIF_ALL
        )
        dispatch(getNotifReducer(data))
    }catch (error){
        throw error;
    }
}