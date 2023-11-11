import { useState } from "react";
import axios from "axios";
import sideImg from "../assets/images/side.png";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [showTestButton, setShowTestButton] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const testLogin = async () => {
    setFormData({ username: "wee", password: "wee" });
    setShowTestButton(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://classroom-connect-mern-pib2-b5ai2hfj8-sasszz.vercel.app/api/users/login",
        formData
      );
      const token = res.data.token;
      const userData = res.data;
      localStorage.setItem("token", token);
      login(userData);
      navigate("/classroom");
    } catch (err) {
      console.error("error during login", err);
    }
  };

  return (
    <div className="bg-[#00008B] flex flex-wrap items-center h-screen w-screen m-auto">
      <img className="h-screen w-auto" src={sideImg} alt="" />
      <div className="text-white text-center m-auto w-auto">
        <div className="text-3xl m-5 font-bold">Login</div>
        <form onSubmit={handleLogin}>
          <input
            name="username"
            label="Username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="rounded-xl m-3 w-80 text-black"
            required
          />
          <br />
          <input
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="rounded-xl m-3 w-80 text-black"
            required
          />
          <br />
          <button
            type="submit"
            className="bg-[#1178f8] hover:bg-[#EEC643] text-white rounded-xl px-4 py-2 my-2 w-60"
          >
            Login
          </button>
        </form>
        {showTestButton && (
          <button
            onClick={testLogin}
            className="bg-[#1178f8] hover:bg-[#EEC643] text-white rounded-xl px-4 py-2 my-2 w-60"
          >
            Test Login Credentials
          </button>
        )}
        <div className="flex items-center space-x-4 w-60 mx-20">
          <div className="border-t border-b border-gray-300 flex-grow"></div>
          <span className="text-white">or</span>
          <div className="border-t border-b border-gray-300 flex-grow"></div>
        </div>

        <div className="border mx-20 text-white rounded-2xl px-4 py-2 my-2 w-60">
          Login with Google
        </div>

        <Link to="/signup">
          <div>
            Haven't Registered?{" "}
            <span className="hover:text-[#1178f8] underline">Sign Up</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
