import React, { useState } from 'react';
import { register } from '../../../config/Firebase';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const sumbit = () => {
  
    register({name, email, password })
    // console.log(,"data")
  }

  return (
    <div>
      <div className="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
          Register Form
        </span>
        <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
          <div >
            <label htmlFor="email" className="block">Username </label>
            <input type="text" id="text" value={name} className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username " onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email" className="block">User Email</label>
            <input type="email" id="email" value={email} className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="User Email"
            onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password" className="block">Password</label>
            <input type="password" id="password" value={password} className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}/>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                </div>
                <div className="text-sm ml-3">
                  <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
                </div>
              </div>
             
        
            </div>
            <button onClick={sumbit} className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">
              signup
            </button>
            <button className="mt-5 bg-blue-300 hover:bg-blue-700 shadow-sm text-white uppercase text-sm font-semibold px-4 py-3 rounded ms-10">
              <Link to={"/login"}  >Login</Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
