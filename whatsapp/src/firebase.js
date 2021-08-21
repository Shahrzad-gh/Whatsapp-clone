// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYnlx0l2mzGCOwQIaSmHd7UKv2gdTlFkk",
  authDomain: "whatsapp-mern-d1fb1.firebaseapp.com",
  projectId: "whatsapp-mern-d1fb1",
  storageBucket: "whatsapp-mern-d1fb1.appspot.com",
  messagingSenderId: "764792324870",
  appId: "1:764792324870:web:301f2aa6097afc4ebcd487",
  measurementId: "G-EH1PZWED2X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;