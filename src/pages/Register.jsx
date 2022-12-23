import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import axios from "../components/axios";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
//   faL,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const NAME_REGEX = /^[a-z ,.'-]+$/i;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/api/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  //Fullname
  const [fullname, setFullname] = useState("");
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  //Username
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  //Email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //Password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  //Confirmation Password
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validPasswordConfirmation, setValidPasswordConfirmation] =
    useState(false);
  const [passwordConfirmationFocus, setPasswordConfirmationFocus] =
    useState(false);

  //Success or Error
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFullname(NAME_REGEX.test(fullname));
  }, [fullname]);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidPasswordConfirmation(PASSWORD_REGEX.test(password));
    setValidPasswordConfirmation(password === passwordConfirmation);
  }, [password, passwordConfirmation]);

  useEffect(() => {
    setErrMsg("");
  }, [username, email, password, passwordConfirmation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = NAME_REGEX.test(fullname);
    const v2 = USER_REGEX.test(username);
    const v3 = EMAIL_REGEX.test(email);
    // const v4 = PASSWORD_REGEX.test(password);
    if (!v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REGISTER_URL, {
        fullname,
        username,
        email,
        password,
        passwordConfirmation
      });
      const token = response.data.data.token;
      localStorage.setItem("token", response.data.data.token);
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      setFullname("");
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        errRef.current.focus();
      }
    }
  };
  const handleNotif=()=>{
    success?(console.log("Sukses")):(console.log("Gagal"))
  }

  return (
    <>
          {success ? (
            <Home/>
          ) : (
            <section>
              <Navbar />
              <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
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
                    ref={userRef}
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    required
                    aria-invalid={validFullname ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setFullnameFocus(true)}
                    onBlur={() => setFullnameFocus(false)}
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
                    ref={userRef}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={validUsername ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)}
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
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
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
                    ref={userRef}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setPasswordConfirmationFocus(true)}
                    onBlur={() => setPasswordConfirmationFocus(false)}
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
                    ref={userRef}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation}
                    required
                    aria-invalid={validPasswordConfirmation ? "false" : "true"}
                    // aria-describedby="uidnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                </label>
                <button className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold" onClick={handleNotif}>
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
