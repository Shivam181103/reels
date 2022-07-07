import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMAFnjFHYhjjq1a51Zf6g1DdAXB8r0HHo",
  authDomain: "reels-clone-f11a0.firebaseapp.com",
  projectId: "reels-clone-f11a0",
  storageBucket: "reels-clone-f11a0.appspot.com",
  messagingSenderId: "604362891082",
  appId: "1:604362891082:web:0d085122af76ca26f32bb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()