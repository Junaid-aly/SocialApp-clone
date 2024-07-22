import React, { useState } from "react";
import { useAuth } from "../../context/AuthContex";
import MyImg from "../../images/my-1.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authData] = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
      >
        <span className="mx-1">Profile</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute right-0 z-20 w-52 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 sm:w-64 lg:w-52 xl:w-52"
        >
          {authData ? (
            <a
              href="#"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img
                className="flex-shrink-0 object-cover mx-1 text-center rounded-full w-10 h-10 sm:w-12 sm:h-12"
                src={authData?.photoURL || MyImg}
              />
              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Name: {authData?.displayName || "?"}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {authData?.email || "Email ?"}
                </p>
              </div>
            </a>
          ) : (
            <a
              href="#"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img
                className="flex-shrink-0 object-cover mx-1 text-center rounded-full w-10 h-10 sm:w-12 sm:h-12"
                src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              />
              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Name: ?
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email ?
                </p>
              </div>
            </a>
          )}

          <hr className="border-gray-200 dark:border-gray-700" />

          <a
            href="#"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="mx-1">
              <Link to={"/profile"}>View Profile</Link>
            </span>
          </a>

          <a
            href="#"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2147 15.2079 19.33L14.7999 21.213C14.6993 21.673 14.2928 22 13.8199 22ZM11.9999 16.997C14.7604 16.997 16.9999 14.7576 16.9999 11.997C16.9999 9.23642 14.7604 6.997 11.9999 6.997C9.23935 6.997 6.99992 9.23642 6.99992 11.997C6.99992 14.7576 9.23935 16.997 11.9999 16.997Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="mx-1">Settings</span>
          </a>

          {authData ? (
            <button
              className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 mt-4"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 mt-4">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
