
import { initializeApp } from "firebase/app";

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";


const firebaseConfig = {
    apiKey: "AIzaSyARdqLFZyVPvNHV0hR4CgkmUBJHbFTAGEw",
    authDomain: "socail-app-a9418.firebaseapp.com",
    projectId: "socail-app-a9418",
    storageBucket: "socail-app-a9418.appspot.com",
    messagingSenderId: "323783550369",
    appId: "1:323783550369:web:b8cdf00781365e9f6397e0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// ------- REGISTER FUN START-------- //

export async function register(userinfo) {
  try {
    const {name, email, password,   } = userinfo;
    const userData  = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userData.user,{
      displayName: name
    })
    await addDoc(collection(db, "users"), {
      name,
      email,
    });
    toast.success("Successfully Register");
  } catch (e) {
    toast.error(e.message);
  }
}
// ------- REGISTER FUN END -------- //


// ------- LOGIN FUN START-------- //

export async function login(userinfo) {
  try {
    const { email, password } = userinfo;
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Successfully logged");
    // Navigate("/");
  } catch (e) {
    alert(e.message);
  }
}

// ------- LOGIN FUN END-------- //




// ------- ADD DATA START-------- //

export async function addItem(data) {
  try {
    const { image, userName, userImage } = data;
    
    const storageRef = ref(storage, `posts/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    
    const docRef = await addDoc(collection(db, "posts"), {
      userName: userName,
      image: imgUrl,
      createdAt: new Date(),
      userImage: userImage,

    });
    // toast.success(' Added Post Successfully')
    return docRef.id; 
  } catch (e) {
    throw new Error(e.message);
  }
}

// ------- ADD DATA END-------- //



// ------- GET DATA START-------- //


export async function getAds() {
  const ads = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'posts')); // Adjust the collection name if necessary
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const ad = {
        id: doc.id,
        ...data,
        createdAt: data.createdAt ? data.createdAt.toDate().toLocaleString() : null // Convert and format timestamp
      };
      ads.push(ad);
    });
  } catch (error) {
    console.error('Error fetching ads:', error);
  }
  return ads;
}


// ------- GET DATA END-------- //



// export async function updateCard(cardImg) {
//   try {
//     const { image } = cardImg;

//     const storageRef = ref(storage, `udateImages/${image.name}`);
//     await uploadBytes(storageRef, image);
//     const imgUrl = await getDownloadURL(storageRef);
//     return imgUrl;
//   } catch (e) {
//     alert(e.message);
//   }
// }


// export async function UserData() {
//   const UserID = [];
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     const Userd = doc.data();
//     Userd.id = doc.id;
//     UserID.push(Userd);
//   });
//   return UserID;
// }

// export async function UpDateImg(e, image) {
//   console.log("e", e);
//   // console.log("imagename" ,image)

//   const userd = e[0];
//   try {
//     const storageRef = ref(storage, `Profile image/${image.name}`);
//     await uploadBytes(storageRef, image);
//     const url = await getDownloadURL(storageRef);
//     await addDoc(collection(db, "users"), {
//       name: userd.name,
//       email: userd.email,
//       img: url,
//     });
   
//     alert("Ad Post Successfully");
//   } catch (e) {
//     alert(e.message);
//   }
// }


