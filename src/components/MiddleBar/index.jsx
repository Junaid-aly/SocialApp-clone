import React, { useEffect, useState } from "react";

import MyImg from "../../images/my-1.jpg";
import MyImg2 from "../../images/my-2.jpg";
import Shahzaib from "../../images/shahzaib.jpg";
import Shoaib from "../../images/feed-shoaib.png";
import Sumair from "../../images/sumair-profile.jpg";
import Awais from "../../images/owais.jpeg";
import Hasham from "../../images/hasham-profile.jpg";
import Bilal from "../../images/bilal.jpg";
import Waqar from "../../images/waqar rana.jpg";
import Arslan from "../../images/arslan.jpg";
import Kashif from "../../images/kashif.jpg";
import { getAds } from "../../config/Firebase";

const Middlebar = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    getProducts();
}, [])

  const getProducts = async () => {
    const ads = await getAds()
    setProducts(ads)

}




  return (
    <>
      <div style={{ marginTop: "80px" }} className="middle ">
        {/* -------------MIDDLE_SIDE ---------------- */}
        <div className="stories">
          <div className="story">
            <div className="profile-picture">
              <img src={MyImg} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>
          <div className="story">
            <div className="profile-picture">
              <img src={Shahzaib} alt="" />
            </div>
            <p className="name">Shahzaib ali</p>
          </div>
          <div className="story">
            <div className="profile-picture">
              <img src={MyImg2} alt="" />
            </div>
            <p className="name">Junaid hussain</p>
          </div>
          <div className="story">
            <div className="profile-picture">
              <img src={Awais} alt="" />
            </div>
            <p className="name">M Owais</p>
          </div>
          <div className="story">
            <div className="profile-picture">
              <img src={Sumair} alt="" />
            </div>
            <p className="name">Sumair ai</p>
          </div>
          <div className="story">
            <div className="profile-picture">
              <img src={Shoaib} alt="" />
            </div>
            <p className="name">Shoaib aly</p>
          </div>
        </div>
        
        {/* -------------End Stories ---------------- */}
        <div className="create-post">
          <div className="profile-picture">
            <img src={MyImg} />
          </div>
          <input
            type="text"
            placeholder="what's on  your mind, junaid? "
            id="create-post"
          />
          <input
            type="submit"
            defaultValue="Post"
            className="btn btn-primary"
          />
        </div>
        {/* -------------FEEDS ---------------- */}
        <div className="feeds">

{products?.map((item) => (
  <div key={item.id} className="feed border rounded-lg p-4 shadow-md font-bold">
    <div className="head">
      <div className="user">
        <div className="profile-picture">
          <img src={item.image|| 'defaultProfilePictureURL'} alt={`Profile of ${item.user || 'Unknown User'}`} />
        </div>
        <div className="info">
          <h3>{item.user || 'Unknown User'}</h3>
          <small> {item.createdAt}</small>
        </div>
      </div>
      <span className="edit">
        <i className="uil uil-ellipsis-h" />
      </span>
    </div>
    <div className="photo">
      {item.image && (
        <img src={item.image} alt={`Post by ${item.user|| 'Unknown User'}`} className="w-full h-auto object-cover rounded-md" />
      )}
    </div>
    <div className="action-button">
              <div className="incr-button">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
    <div className="liked-by">
              <span>
                <img src={Sumair} alt="" />
              </span>
              <span>
                <img src={Bilal} alt="" />
              </span>
              <span>
                <img src={Waqar} alt="" />
              </span>
              <p>
                Liked-by <b>Junaid Hussain</b> and <b>2.322 others</b>{" "}
              </p>
            </div>
            <div className="caption">
              <p>
                <b>bilal vakani </b> What is the expected behavior of your
                project, and what is actually happening?
                <span className="harsh-tag">#Coding</span>
              </p>
            </div>
            <div className="comments text-muted"> View all 288 comments</div>
  </div>
))}

          {/* -------------FEED 1 ---------------- */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img src={Hasham} alt="" />
                </div>
                <div className="ingo">
                  <h3>Hasham vakani</h3>
                  <small>Dubai, IS MINUTES AGO</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src={Hasham} />
            </div>
            <div className="action-button">
              <div className="incr-button">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src={Sumair} alt="" />
              </span>
              <span>
                <img src={Bilal} alt="" />
              </span>
              <span>
                <img src={Waqar} alt="" />
              </span>
              <p>
                Liked-by <b>Junaid Hussain</b> and <b>2.322 others</b>{" "}
              </p>
            </div>
            <div className="caption">
              <p>
                <b>bilal vakani </b> What is the expected behavior of your
                project, and what is actually happening?
                <span className="harsh-tag">#Coding</span>
              </p>
            </div>
            <div className="comments text-muted"> View all 288 comments</div>
          </div>
          {/*-----------FEED END ---------------- */}
          {/* -------------FEED 2 ---------------- */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img src={Waqar} alt="" />
                </div>
                <div className="ingo">
                  <h3>Waqar rana</h3>
                  <small>Karcahi, IS 2 WEEK AGO</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src={Waqar} />
            </div>
            <div className="action-button">
              <div className="incr-button">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src={MyImg2} />
              </span>
              <span>
                <img src={Waqar} />
              </span>
              <span>
                <img src={Hasham} alt="" />
              </span>
              <p>
                Liked-by <b>Umer Siddiqui</b> and <b>2.322 others</b>{" "}
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Array of Obj </b> notthing elas dear ?
                <span className="harsh-tag">#lifeEnjoy</span>
              </p>
            </div>
            <div className="comments text-muted"> View all 288 comments</div>
          </div>
          {/*-----------FEED END ---------------- */}
          {/* -------------FEED 3 ---------------- */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img src={Arslan} alt="" />
                </div>
                <div className="ingo">
                  <h3>Arslan Sallo</h3>
                  <small>Karcahi, IS 1 WEEK AGO</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src={Arslan} />
            </div>
            <div className="action-button">
              <div className="incr-button">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src={Hasham} alt="" />
              </span>
              <span>
                <img src={Sumair} />
              </span>
              <span>
                <img src={Arslan} />
              </span>
              <p>
                Liked-by <b>Muhammad Taha</b> and <b>1.72 others</b>{" "}
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Bilal Vakani</b> Help me Shera For React project not any
                response?
                <span className="harsh-tag">#Coding</span>
              </p>
            </div>
            <div className="comments text-muted"> View all 288 comments</div>
          </div>
          {/*-----------FEED END ---------------- */}
          {/* -------------FEED 4 ---------------- */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-picture">
                  <img src={Kashif} alt="" />
                </div>
                <div className="ingo">
                  <h3>Muhammad Kashif</h3>
                  <small>Karcahi, IS 3 Hour AGO</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src={Kashif} />
            </div>
            <div className="action-button">
              <div className="incr-button">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src={MyImg} alt="" />
              </span>
              <span>
                <img src={Waqar} alt="" />
              </span>
              <span>
                <img src={Bilal} />
              </span>
              <p>
                Liked-by <b>Junaid-aly</b> and <b>2.97 others</b>{" "}
              </p>
            </div>
            <div className="caption">
              <p>
                <b> Muhammad Aqdas</b> Don’t judge my past, look at my present,
                I am sure my future is really rocking.🔥?
                <span className="harsh-tag">#lifeStyle</span>
              </p>
            </div>
            <div className="comments text-muted"> View all 288 comments</div>
          </div>
          {/*-----------FEED END ---------------- */}
        </div>
      </div>
    </>
  );
};

export default Middlebar;
