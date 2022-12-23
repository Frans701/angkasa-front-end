import { faDiagramPredecessor } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { set } from "immer/dist/internal";
import { setToken, setUser } from "../reducers/authReducer";

export const login = (data)=>async (dispatch)=>{
    try{
        const response = await axios.post(
            "https://angkasa-api-staging.km3ggwp.com/api/login", data
        );
        if (response.data.data.token){
            localStorage.setItem("token", response.data.data.token);
            dispatch(setToken(response.data.data.token));
        }
    } catch (err){
        console.log(err.response.data.message)
    }
};

export const resgiter = (data)=>async (dispatch)=>{
    try{
        const response = await axios.post(
            "https://angkasa-api-staging.km3ggwp.com/api/register", data
        );
        if (response.data.data.token){
            localStorage.setItem("token", response.data.data.token);
            dispatch(setToken(response.data.data.token));
        }
    } catch (err){
        console.log(err.response.data.message)
    }
};

export const getMe = (callback) => async (dispatch, getState)=>{
    try{
        const { token } =getState().auth;
        const response = await axios.get(
            "https://angkasa-api-staging.km3ggwp.com/api/me" , {
                headers:{
                    Authorization : `Bearer ${token}`,
                },
            }
        );
        dispatch(setUser(response.data.data));
    } catch (err){
        if(err.response.status = 401){
            localStorage.removeItem("token");
            dispatch(setToken(null));
            callback(err.response.status)
        }
    }
};

export const logout = () => async (dispatch)=>{
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
}