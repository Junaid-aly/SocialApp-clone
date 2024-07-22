import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/Firebase";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Successfully logged in");
      navigate("/"); // Use navigate function to redirect
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-md p-8 m-4 bg-gradient-to-r from-cyan-500/25 to-blue-700/25 backdrop-blur-md dark:bg-zinc-700 rounded-lg shadow-2xl">
        <div className="p-4">
          <h2 className="text-2xl font-semibold dark:text-white"></h2>
          <div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dark:text-gray-700 w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:text-gray-700 w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center mb-5 mt-4">
              <input
                id="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <label
                htmlFor="remember"
                className="text-sm ml-2 font-medium dark:text-white"
              >
                Remember me
              </label>
            </div>

            <div className="mt-6">
              <button
              onClick={handleSubmit}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
