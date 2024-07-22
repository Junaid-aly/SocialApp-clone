import React from 'react'
import Hasham from "../../images/hasham-profile.jpg"
import Umer from "../../images/umer.jpg"
import Waqar from "../../images/waqar rana.jpg"
import Shoaib from "../../images/feed-shoaib.png"
import Sumair from "../../images/sumair-profile.jpg"
import Awais from "../../images/owais.jpeg"
import Bilal from "../../images/bilal.jpg"
import Aqdas from "../../images/Muhammad Aqdas.jpg"
const Rightbar = () => {
  return (
    <div>
      <div className="right" style={{marginTop:"90px"}}>
        <div className="messages font-bold">
          <div className="heading">
            <h4>Messages</h4>
            <i className="uil uil-edit" />
          </div>
          {/*-----------SEARCH BAR---------------*/}
          <div className="search-bar">
            <i className="uil uil-search" />
            <input
              type="search"
              placeholder="search messages"
              id="messages-search"
            />
          </div>
          {/*-----------Message Category---------------*/}
          <div className="category">
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="message-requests">Requests(4)</h6>
          </div>
          {/*-----------Message---------------*/}
          <div className="message">
            <div className="profile-picture">
              <img src={Hasham} />
            </div>
            <div className="message-body">
              <h5>Hasham Vakani </h5>
              <p className="text-muted">Just wake up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
            <img src={Shoaib} />
              <div className="active" />
            </div>
            <div className="message-body">
              <h5>Shoaib ali </h5>
              <p className="text-muted">Received gift thanks dear</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
            <img src={Waqar} />
            </div>
            <div className="message-body">
              <h5>Waqar Rana</h5>
              <p className="text-bold">2 new messages</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
            <img src={Sumair} />
            </div>
            <div className="message-body">
              <h5>Sumair-ali</h5>
              <p className="text-bold">Hey Bro u are genius </p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
            <img src={Awais} />
              <div className="active" />
            </div>
            <div className="message-body">
              <h5>M Owais</h5>
              <p className="text-bold">Birthday Tomorrow! </p>
            </div>
          </div>
        </div>
        {/*-----------End Message---------------*/}
        {/*-----------Friend-Request---------------*/}
        <div className="friend-requests">
          <h4>Requests</h4>
          <div className="request">
            <div className="info">
              <div className="profile-picture">
              <img src={Umer} />
              </div>
              <div>
                <h5>Umer Siddiqui </h5>
                <p className="text-muted">22 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn ">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-picture">
              <img src={Bilal} />
              </div>
              <div>
                <h5>Bilal Vakani</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn ">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-picture">
              <img src={Aqdas} />
              </div>
              <div>
                <h5>Muhammad Aqdas </h5>
                <p className="text-muted">6 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn ">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
