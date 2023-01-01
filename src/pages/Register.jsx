import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const { token, error } = useSelector ((state) => state.auth);
  const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
  // const [success,setSuccess] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const redirect = useNavigate();
  const showError = () => {
    toast.error('Salah', {
        position: toast.POSITION.BOTTOM_LEFT
    });
  };
  const showSuccess = () => {
    toast.success('Bener', {
        position: toast.POSITION.BOTTOM_LEFT
    });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (fullname === "" || username === "" || email ==="" || password === "" || passwordConfirmation===""){
      alert("Please fill the blank field");
      return;
    }
    if (password !== passwordConfirmation){
      alert("Please enter the same password");
      return;
    }
    if (fullname !== "" && username !== "" && email !=="" && password === passwordConfirmation){
      const data= {
        fullname,
        username,
        email,
        password,
        passwordConfirmation,
      };
      try{
        const response = await axios.post(`${URL}/register`, data);
        console.log(response);
        redirect("/login");
      } catch(e){
        console.log(e.response.data.errors)
        setErrors(e.response.data?.errors)
      }
    }
  };
  return (
    <>
            <section>
              <Navbar />
              <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="bg-gray-100 flex flex-col justify-center">
                  <div className="flex flex-col gap-[16px] items-center py-5">
                    <img className="w-[140px]" src={angkasaLogo} alt="" />
                  </div>
              <form
                className="max-w-[425px] w-full mx-auto bg-white p-4"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Fullname
                  </span>
                  <input
                    type="text"
                    id="fullname"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Enter your fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    required
                  />
                </label>

                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Username
                  </span>
                  <input
                    type="name"
                    id="username"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                  {errors && (
                        <p className="text-red-500">
                          {errors.username}
                        </p>
                  )}
                </label>

                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Email
                  </span>
                  <input
                    type="text"
                    id="email"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  {errors && (
                        <p className="text-red-500">
                          {errors.email}
                        </p>
                  )}
                </label>

                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  {errors && (
                        <p className="text-red-500">
                          {errors.password}
                        </p>
                  )}
                </label>

                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    id="password_confirmation"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Confirm your password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation}
                    required
                  />
                </label>
                <button 
                className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold"
                >
                    Register
                </button>

                <Link
                  to="/login"
                  className="flex flex-col items-center text-sm font-medium mb-3 px-2 py-2 rounded-md">
                  Already Have Account?
                </Link>
              </form>
              </div>
              <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginIMG} alt="" />
              </div>
            </div>
            <ToastContainer/>
            </section>
    </>
  );
};

export default Register;
