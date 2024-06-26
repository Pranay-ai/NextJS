import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvfSghwvdAiLEzWe95CAxzr_e1KS7BHLo",
  authDomain: "webrtc-4652f.firebaseapp.com",
  databaseURL: "https://webrtc-4652f-default-rtdb.firebaseio.com",
  projectId: "webrtc-4652f",
  storageBucket: "webrtc-4652f.appspot.com",
  messagingSenderId: "554176975004",
  appId: "1:554176975004:web:a10cd45d751a2ccf9f5d59",
  measurementId: "G-JBHC0M7KF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadImageFirebase(file, fileName) {
  // Create a storage reference
  const storageRef = ref(storage, 'images/' + fileName);

  // Upload the file
  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a blob or file!', snapshot);
  } catch (error) {
    console.error('Upload failed', error);
  }
}

export async function getImageUrl(imageName) {
  // Create a reference to the file we want to download
  const storageRef = ref(storage, 'images/' + imageName);

  try {
    // Get the download URL
    const url = await getDownloadURL(storageRef);
    console.log('File available at', url);
    return url;
  } catch (error) {
    console.error('Error getting download URL', error);
  }
}
