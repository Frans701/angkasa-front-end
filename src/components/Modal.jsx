import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setUser } from '../redux/reducers/authReducer';

function Modal({visible, onClose}) {
    const { user } = useSelector((state) => state.auth);
    const [fullname, setFullname] = useState(user.fullname);
    const [username, setUsername] = useState(user. username);
    const [email, setEmail] = useState (user.email);
    const handleClose =(e)=>{
        if(e.target.id==="modal"){
            onClose()
        }
    }
    if(!visible){
        return null;
    }

    return (
        <div 
        id="modal"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
        onClick ={handleClose}>
        <div className="bg-white p-2 rounded w-72">
            <h1 className="font-semibold text-center text-xl text-gray-700">
            Edit Profile
            </h1>

            <div className="flex flex-col">
            <span className="block text-base font-medium  text-slate-700">Name</span>
            <input
                type="text"
                id="fullname"
                className="border border-gray-700 p-2 rounded mb-5"
                value ={fullname}
                onChange={(e)=>{
                    setFullname(e.target.value)}}
            />
            <span className="block text-base font-medium  text-slate-700">Username</span>
            <input
                type="text"
                id="username"
                className="border border-gray-700 p-2 rounded mb-5"
                value ={username}
                onChange={(e)=>{
                    setUsername(e.target.value)}}
            />
            <span className="block text-base font-medium  text-slate-700">Email</span>
            <input
                type="text"
                id="email"
                className="border border-gray-700 p-2 rounded mb-5"
                value ={email}
                onChange={(e)=>{
                    setEmail(e.target.value)}}
            />
            </div>
            <div className="text-center">
            <button className="px-5 py-2 bg-gray-700 text-white rounded">
                Update Profile
            </button>
            </div>
        </div>
        </div>

    )
}

export default Modal