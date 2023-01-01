import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "../components/axios";

const Login = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState([]);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [role, setRole] = useState(null);

  const clientId =
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
      console.log(login(data));
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = async (res) => {
    setProfile(res.profileObj);
    try {
      const result = await axios.post(
        "https://angkasa-api-staging.km3ggwp.com/api/login/google/callback",
        {
          credential: res.tokenId,
        }
      );
      setData(result.data);
      if (data.data.token) {
        localStorage.setItem("token", result.data.data.token);
        localStorage.setItem("role", result.data.data.user.role);
        setToken(result.data.data.token);
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  // useEffect(() => {
  //   if (token) {
  //     redirect("/");
  //   }
  // }, [token]);

  return (
    <>
      <section>
        <Navbar setToken={setToken} token={token} />
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

              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />

              <Link
                to="/register"
                className="flex flex-col items-center text-sm font-medium mb-3 px-2 py-2 rounded-md"
              >
                Create Account
              </Link>
              {/* <fieldset>
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
                    Remember me
                  </label>
                </fieldset> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
