import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedUsers=({children, setToken})=>{
    const [users, setUsers] = useState(localStorage.getItem("role")==="USER"?true:null);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const GETME_URL="/me"
    
    useEffect(() => {
        (async () => {
        if (token) {
            try {
            await axios.get(GETME_URL, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            } catch (error) {
            if (error.response.status === 401) {
                localStorage.removeItem("token");
                setToken(null);
                navigate("/login");
            }
            }
        }
        })();
    }, [token, navigate, setToken]);

    if (!token) {
        return <Navigate to={`/login`} />;
    }
    return children, users ? <Outlet/> : <Navigate to="/"/>
  
}

export default ProtectedUsers;