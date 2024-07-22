import React, { useState } from 'react';
import { register } from '../../../config/Firebase';
import { Link } from 'react-router-dom';
import Myimg from "../../../images/bg-2.jpg"
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const submit = () => {
    if (name && email && password) {
      register({ name, email, password });
    } else {
     toast.promise('Please fill out all fields.');
    }
  };

  return (
    <div 
    className="relative min-h-screen bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${Myimg})` }}
  >
    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-80 border shadow-xl w-full max-w-md mx-auto rounded-lg">
        <div className="text-4xl text-white px-6 pt-10 pb-8 bg-slate-800 rounded-t-lg">
          Register Form
        </div>
        <div className="px-4 pt-7 pb-8 sm:px-10 rounded-b-lg bg-white">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={name}
              className="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              id="email"
              value={email}
              className="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="User Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center mb-5">
              <input
                id="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <label htmlFor="remember" className="text-sm ml-2 font-medium text-gray-900">Remember me</label>
            </div>

            <button
              onClick={submit}
              className="w-full mt-5 bg-green-500 hover:bg-green-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"
            >
              Sign Up
            </button>
              <Link to="/login">
            <button className="w-full mt-5 bg-blue-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-4 py-3 rounded">
            Login
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
