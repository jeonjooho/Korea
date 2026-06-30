// firebase-config.js
// Replace these values with your Firebase Web App config.
// Keep this file in the same GitHub folder as index.html, start.html, input.html, screen.html.

const firebaseConfig = {
  apiKey: "AIzaSyDwIzffj-frpoHdXCwikjXJQUA3nfV0IH4",
  authDomain: "juho-jeon.firebaseapp.com",
  databaseURL: "https://juho-jeon-default-rtdb.firebaseio.com",
  projectId: "juho-jeon",
  storageBucket: "juho-jeon.firebasestorage.app",
  messagingSenderId: "959274699904",
  appId: "1:959274699904:web:2aaf467c589fe350b0ea65",
  measurementId: "G-H91LRVJ3CB"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.database();
