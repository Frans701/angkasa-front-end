import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { token } = useSelector ((state) => state.auth);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (fullname === "" || username === "" || email ==="" || password === "" || passwordConfirmation===""){
      alert("Please fill the blank field");
    }
    if (password !== passwordConfirmation){
      alert("Please enter the same password");
    }
    if (fullname !== "" && username !== "" && email !=="" && password === passwordConfirmation){
      const data= {
        fullname,
        username,
        email,
        password,
        passwordConfirmation,
      };
      dispatch(register(data));
      redirect("/");
    }
  }

  return (
    <>
          {token ? (
            <Home/>
          ) : (
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
                {/*FULLNAME  */}
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Nama Lengkap
                  </span>
                  <input
                    type="text"
                    id="fullname"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Masukkan nama lengkap"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    required
                  />
                </label>

                {/*USERNAME  */}
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Username
                  </span>
                  <input
                    type="text"
                    id="username"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Masukkan username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                </label>

                {/*EMAIL*/}
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Masukkan email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </label>

                {/*PASSWORD*/}
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Masukkan Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </label>

                {/*CONFIRM PASSWORD*/}
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Konfirmasi Password
                  </span>
                  <input
                    type="password"
                    id="password_confirmation"
                    className="peer ... border p-2"
                    autoComplete="off"
                    placeholder="Konfirmasikan Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation}
                    required
                  />
                </label>
                <button className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold">
                  Buat Akun
                </button>
                <p className="flex flex-col items-center text-sm mb-3">
                  Sudah memiliki akun?
                </p>
              </form>
              </div>
              <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginIMG} alt="" />
              </div>
            </div>
            </section>
          )}
    </>
  );
};

export default Register;
