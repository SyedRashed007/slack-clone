import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD58inX7S89y_LV7RD_ENwLtXQdbIsaRZE",
  authDomain: "slack-clone-6e97a.firebaseapp.com",
  projectId: "slack-clone-6e97a",
  storageBucket: "slack-clone-6e97a.appspot.com",
  messagingSenderId: "688433010144",
  appId: "1:688433010144:web:c7c6befedcd8c1c5a4c785",
  measurementId: "G-9X130CGMHZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
