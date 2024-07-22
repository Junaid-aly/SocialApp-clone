import React from 'react';
import MyImg from "../../images/my-1.jpg"
import { Link,} from 'react-router-dom';
import { useAuth } from '../../context/AuthContex';
import { getAuth, signOut } from "firebase/auth";
import ModalNotification from '../Modal';




const LeftBar = () => {
  const [authData] = useAuth()



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
    <div className="left ">
      {authData ? (
        <Link className="profile font-medium">
        <div className="profile-picture">
        <img src={authData?.photoURL}/>
        </div>
        <div className="handle">
          <h4>{authData?.displayName}</h4>
          <p className="text-muted">@{authData?.displayName}</p>
        </div>
      </Link>
      ):(
      <Link className="profile">
        <div className="profile-picture">
        <img src={MyImg} />
        </div>
        <div className="handle">
          <h4>junaid-aly</h4>
          <p className="text-muted">@aly</p>
        </div>
      </Link>
      )}
      
      <div className="sidebar  font-bold">
        <a className="menu-item active">
          <span>
            <i className="uil uil-home" />
          </span>
          <h3>Home</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-compass" />
          </span>
          <h3>Explore</h3>
        </a>
        <a className="menu-item" id="notifications">
          <ModalNotification/>
         
        
        </a>
        <a className="menu-item" id="messages-notification">
          <span>
            <i className="uil uil-envelope">
              <small className="notificatinos-count">6</small>
            </i>
          </span>
          <h3>Messages</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-bookmark" />
          </span>
          <h3>Bookmarks</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-chart-line" />
          </span>
          <h3>Analytics</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-palette" />
          </span>
          <h3>Theme</h3>
        </a>
        <a className="menu-item ">
          <span>
            <i className="uil uil-setting " />
          </span>
          <h3>Setting</h3>

        </a>
      </div>
      {authData ? (
  <button
    className="w-full bg-slate-900 text-2lg text-white py-2 px-4 rounded-lg hover:bg-red-600  transition-all duration-300 mt-4"
    onClick={handleSignOut}
  >
    Logout
  </button>
) : (
  <Link to={"/login"}>
    <button className="w-full bg-blue-900 text-lg text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 mt-4">
      Log_in
    </button>
  </Link>
)}

    </div>
  );
}

export default LeftBar;
