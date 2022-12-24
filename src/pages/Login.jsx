import loginIMG from "../assets/loginIMG.png";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { useState} from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login, admin } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
  
const Login = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state)=>state.auth);
  const redirect = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === ""){
      alert("Email must be filled");
      return;
    }
    if (password === ""){
      alert("Password must be filled");
      return;
    }
    if(email!=="" && password!==""){
      const data={
        email,
        password,
      }
      dispatch(login(data));
      redirect("/")
    }
    if (email === "admin@email.com" && password === "admin1" ){
      const data={
        email, password
      }
      dispatch(admin(data));
      redirect("/admin");
    }
  };

  return (
    <>
          {!token ? (
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
                  onSubmit={handleSubmit}>
                  <label className="flex flex-col py-2">
                    <span className="block text-base font-medium  text-slate-700">
                      Email
                    </span>
                    <input
                      type="email"
                      className="peer ... border p-2"
                      placeholder="Masukkan email"
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
          ) : (
          <Home/>
      )}
    </>
  );
};

export default Login;