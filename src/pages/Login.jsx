import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { setToken } from "../redux/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const { token, error } = useSelector((state) => state.auth);
  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL =
    process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";
  const ID =
    process.env.REACT_APP_GOOGLE_CLIENT_ID ||
    "401014098201-p74gpb0cm6ho8ofm1hcf5gmde79fqo45.apps.googleusercontent.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email must be filled");
      return;
    }
    if (password === "") {
      alert("Password must be filled");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };
  useEffect(() => {
    if (token) {
      redirect("/");
    }
  });

  useEffect(() => {
    /* global google */
    google?.accounts.id.initialize({
      client_id: ID,
      callback: googleHandler,
    });

    google?.accounts.id.renderButton(document.getElementById("google-signin"), {
      theme: "outline",
      size: "large",
      width: 200,
    });

    // google.accounts.id.prompt();
  }, []);

  const googleHandler = async (response) => {
    try {
      await axios
        .post(`${URL}/login/google/callback`, {
          credential: response.credential,
        })
        .then((result) => {
          console.log(result);
          if (result.data.data.token) {
            localStorage.setItem("token", result.data.data.token);
            localStorage.setItem("role", result.data.data.user.role);
            dispatch(setToken(result.data.data.token));
            redirect("/");
          }
        });
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.errors);
    }
    console.log(response);
  };

  return (
    <>
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
                  placeholder="Fill the email"
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
                  placeholder="Fill the password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </label>
              {error && <p className="text-red-500">{error}</p>}
              <button className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold">
                Login
              </button>

              <div
                className="flex justify-center my-[8px]"
                id="google-signin"
              ></div>

              <Link
                to="/register"
                className="flex flex-col items-center text-sm font-medium mb-3 px-2 py-2 rounded-md"
              >
                Create Account
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
