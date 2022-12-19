import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import axios from "../components/axios";
import { useState, useRef, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import AuthContext from "../components/AuthProvider";

const LOGIN_URL="/api/login";
const Login = ({token, setToken}) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        {
          email,
          password,
        });
        const token = response?.data?.data.token;
        console.log(response);
        localStorage.setItem("token", response?.data?.data.token);
        console.log(JSON.stringify(response?.data));
        const roles = response?.data?.data.roles;
        setAuth({ email, password, roles, token });
        setEmail("");
        setPassword("");
        setSuccess(true);
      } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
          {success ? (
              <Home/>
          ) : (
            <section>
              <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
              <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginIMG} alt="" />
              </div>
              <div className="bg-gray-100 flex flex-col justify-center">
                <div className="flex flex-col gap-[16px] items-center py-5">
                  <img className="w-[140px]" src={angkasaLogo} alt="" />
                </div>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form
                className="max-w-[425px] w-full mx-auto bg-white p-4"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    className="peer ... border p-2"
                    placeholder="Masukkan email"
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </label>

                <label className="flex flex-col py-2">
                  <span className="block text-base font-medium  text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    className="peer ... border p-2"
                    placeholder="Masukkan password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </label>
                <button className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold">
                  Masuk
                </button>
                <p className="flex flex-col items-center text-sm mb-3">
                  Buat akun
                </p>
                <fieldset>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-800"
                  >
                    Ingat saya
                  </label>
                </fieldset>
              </form>
              </div>
            </div>
            </section>
          )}
    </>
  );
};

export default Login;