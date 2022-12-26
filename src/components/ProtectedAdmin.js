import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin =()=>{
    const [admin, setAdmin] = useState(localStorage.getItem("role")==="ADMIN"?true:null);
    return admin ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedAdmin;
