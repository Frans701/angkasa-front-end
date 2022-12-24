import axios from "axios";

import { getNotifReducer } from "../reducers/notifReducer";

export const getAllNotifications = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://angkasa-api-staging.km3ggwp.com/api/notifications/all"
        )
        dispatch(getNotifReducer(data.notifications))
    }catch (error){
        throw error;
    }
}