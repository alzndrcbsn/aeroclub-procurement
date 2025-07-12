const firebaseConfig = {
  apiKey: "AIzaSyC7dS5-UP61Y1wQHLhy-ztYr9wH19fjJT0",
  authDomain: "aeroamt-club.firebaseapp.com",
  projectId: "aeroamt-club",
  storageBucket: "aeroamt-club.appspot.com", // ✅ Make sure this is correct!
  messagingSenderId: "599025555692",
  appId: "1:599025555692:web:a81f44bba23a4a6dc16dc9",
  measurementId: "G-TSZW8JJ6CZ"
};

firebase.initializeApp(firebaseConfig); // ✅ Required
firebase.analytics();
