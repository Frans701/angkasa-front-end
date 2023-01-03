import React from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
const URL =
  process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";

function GoogleLogin({ setToken, label }) {
  const redirect = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = {
          credential: response.access_token,
        };
        const result = await axios.post(`${URL}/login/google/callback`, data);
        if (result.data.data.token) {
          localStorage.setItem("token", result.data.data.token);
          setToken(result.data.data.token);
          redirect("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div className="d-grid">
      <div className="m-auto">
        <button
          className="bg-gray-50 border border-gray-300 text-gray-900 px-4 py-2 rounded-xl w-full"
          onClick={googleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} /> {label}
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
