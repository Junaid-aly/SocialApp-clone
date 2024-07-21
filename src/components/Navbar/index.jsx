import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContex";
import User from "../Auth/User";
import PostItem from "../CreatePost";


const Navbar = () => {
  const [authData] = useAuth();
  return (
    <nav className="w-full bg-white py-2 fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">MyScript</h2>
        <div className="bg-gray-100 rounded-lg p-2 flex items-center">
          <i className="uil uil-search" />
          <input
            type="search"
            placeholder="search"
            className="bg-transparent w-1/3 ml-4 text-sm text-gray-800 placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-8">
          {authData ? (
           
              <PostItem />
         
          ) : (
            <Link to={"/Signup"}>
              <label className="btn btn-primary" htmlFor="#create-btn">
                Register
              </label>
            </Link>
          )}

          <User />

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
