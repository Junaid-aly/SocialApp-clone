import React from 'react';
import MyImg from "../../images/my-1.jpg"



const LeftBar = () => {
  return (
    <div className="left">
      <a className="profile">
        <div className="profile-picture">
        <img src={MyImg} />
        </div>
        <div className="handle">
          <h4>junaid-aly</h4>
          <p className="text-muted">@aly</p>
        </div>
      </a>
      <div className="sidebar">
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
          <span>
            <i className="uil uil-bell">
              <small className="notificatinos-count">9+</small>
            </i>
          </span>
          <h3>Notifications</h3>
          <div className="notification-pop">
            {/* Add notification items here */}
          </div>
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
        <a className="menu-item active">
          <span>
            <i className="uil uil-setting " />
          </span>
          <h3>Setting</h3>

        </a>
      </div>
      <label htmlFor="create-post" className="btn btn-primary">
        Create post
      </label>
    </div>
  );
}

export default LeftBar;
