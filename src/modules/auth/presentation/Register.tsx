import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/context/AuthContext";
import Img from "assets/brand/logo.png";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password, username);
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center w-full h-full login-container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full px-10 pt-6 pb-10 mx-6 border border-gray-700 login-form bg-zinc-900 lg:w-1/2"
      >
        <div className="flex flex-col items-center gap-2 mb-6 ">
          <Link to="/">
            <img className="h-32 rounded-full" alt="logo" src={Img} />
          </Link>
          <h3 className="text-2xl font-bold text-center">Regisger</h3>
        </div>

        <div className="flex flex-col w-full gap-4 md:w-4/6">
          <div className="flex flex-col w-full">
            <label className="login-label" htmlFor="username">
              User Name
            </label>
            <input
              type="text"
              className="block w-full py-1 mt-1 text-gray-300 bg-transparent border-gray-700 rounded-sm shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="login-label" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              className="block w-full py-1 mt-1 text-gray-300 bg-transparent border-gray-700 rounded-sm shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="login-label" htmlFor="username">
              Password
            </label>
            <input
              type="password"
              className="block w-full py-1 mt-1 text-gray-300 bg-transparent border-gray-700 rounded-sm shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="py-2 mt-4 transition-all duration-300 border border-gray-700 rounded shadow-sm login-btn hover:font-bold hover:bg-gray-800 bg-zinc-800 hover:shadow-md hover:cursor-pointer"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
