import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZ8b-IEg6rJ5LJqjvFV_HoSzxjJQyR96M",
  authDomain: "image-upload-a4e3b.firebaseapp.com",
  projectId: "image-upload-a4e3b",
  storageBucket: "image-upload-a4e3b.appspot.com",
  messagingSenderId: "124170682585",
  appId: "1:124170682585:web:84ce0c683699f95cf5bec8",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
