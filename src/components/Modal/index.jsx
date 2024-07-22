import React, { useState } from "react";
import Arslan from "../../images/arslan.jpg"
import Waqar from "../../images/waqar rana.jpg"
import Sumair from "../../images/sumair-profile.jpg"
import Umer from "../../images/umer.jpg"
import { Link } from "react-router-dom";

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-transparent backdrop-blur-sm">
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-center">
          <div className="notification-pops space-y-4">
            <div className="flex items-center space-x-4">
              <div className="profile-picture w-12 h-12">
                <img src={Waqar} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="notification-body">
                <b>Waqar Rana</b> commented on your post 
                <small className="text-muted block"> 3 HOURS AGO </small>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="profile-picture w-12 h-12">
                <img src={Arslan} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="notification-body">
                <b>Arslan Sallo</b> and <b>255 others</b> liked your post 
                <small className="text-muted block"> 5 MINUTES AGO </small>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="profile-picture w-12 h-12">
                <img src={Umer} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="notification-body">
                <b>Umer Siddiqui</b> commented on a post you are tagged in 
                <small className="text-muted block"> 2 DAYS AGO </small>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="profile-picture w-12 h-12">
                <img src={Sumair} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="notification-body">
                <b>Sumair-aly</b> commented on your post 
                <small className="text-muted block"> 1 HOUR AGO </small>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link className="menu-item" id="notifications" onClick={handleOpenModal}>
        <span>
          <i className="uil uil-bell">
            <small className="notificatinos-count">9+</small>
          </i>
        </span>
        <h3>Notifications</h3>
      </Link>

      <NotificationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ModalNotification;
