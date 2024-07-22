import { useState } from "react";
import { useAuth } from "../../context/AuthContex";
import { addItem } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PostItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authData] = useAuth();
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();
  const userName = authData && authData.displayName
  const userImage = authData && authData.photoURL
  const handleSubmit = async () => {
    if (userName && image) {
      try {
        await addItem({ image, userName,userImage });
        toast.success("Item added successfully");
        window.location.reload(); // Force a page reload
      } catch (error) {
        console.error("Error adding post:", error);
        toast.error("An error occurred while adding the post.");
      }
    } else {
      toast.error("Please fill out all fields and select an image.");
    }
  };
  return (
    <>
      <div className="relative flex justify-center ">
        <button
          onClick={() => setIsOpen(true)}
          className="px-3 p-1 mx-auto text-white capitalize bg-blue-600 rounded-md hover:bg-opacity-100 focus:outline-none"
        >
          Create_post
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-2/3 px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-transparent backdrop-blur-sm">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Create a New Post
                </h3>
                <div>
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-700 dark:text-gray-200"
                    >
                      Name
                    </label>
                    <label className="block mt-3">
                      <input
                        name="user"
                        type="text"
                        value={userName}
                        placeholder="Name"
                        onChange={(e) => setUser({userName})}
                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block mt-3" htmlFor="image">
                      Choose Image:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                      />
                    </label>
                  </div>
                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-600 hover:bg-opacity-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Add Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostItem;
