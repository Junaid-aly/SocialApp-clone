import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../../context/AuthContex";

function Profile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [triggerReload, setTriggerReload] = useState(false);
  const [authData] = useAuth();

  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      setName(authData.displayName || "junaid ali");
    }
  }, [auth.currentUser, triggerReload]);

  const handleSubmit = async () => {
    let photoURL = auth.currentUser.photoURL;

    if (image) {
      const storage = getStorage();
      const imageRef = ref(storage, `profileImages/${image.name}`);
      await uploadBytes(imageRef, image);
      photoURL = await getDownloadURL(imageRef);
    }

    await updateProfile(auth.currentUser, {
      displayName: name || "junaid ali",
      photoURL,
    })
      .then(() => {
        alert("Profile updated");
        setTriggerReload(!triggerReload);
      })
      .catch((error) => {
        alert("Error updating profile: " + error.message);
      });
  };

  return (
    <div className="container min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-8 w-80 bg-white  rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <hr className="mb-4" />
        <div className="mb-4">
          {auth.currentUser ? (
            <img
              src={
                authData.photoURL ||
                "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              }
              alt="Profile"
              className="rounded-full w-28 h-28 object-cover"
            />
          ) : (
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="Default"
              className="rounded-full w-28 h-28 object-cover"
            />
          )}
          <label className="block text-sm font-medium text-gray-700">
            Profile Photo
          </label>
          <div className="mt-2">
            <label
              htmlFor="file"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="User"
            value={name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-2">

        <button
          className="w-2/3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          onClick={handleSubmit}
          >
          Save Changes
        </button>
        <button
          className="w-2/3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          
          >
          Back
        </button>
          </div>
        
      </div>
    </div>
  );
}

export default Profile;
