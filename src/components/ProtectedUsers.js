import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedUsers=()=>{
    const [users, setUsers] = useState(localStorage.getItem("role")==="USER"?true:null);
    return users ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedUsers;