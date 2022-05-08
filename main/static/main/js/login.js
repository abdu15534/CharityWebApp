import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"></script>;
<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"></script>;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDPADoO3-IZe5dfTAQQM9Aa_90DdNe9Q",
  authDomain: "foodproject-b836d.firebaseapp.com",
  databaseURL: "https://foodproject-b836d-default-rtdb.firebaseio.com",
  projectId: "foodproject-b836d",
  storageBucket: "foodproject-b836d.appspot.com",
  messagingSenderId: "849318341139",
  appId: "1:849318341139:web:eea5e0cbce394e123fede6",
  measurementId: "G-NTMERVK12L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const auth = firebase.auth();
const database = firebase.database();

email = document.getElementById("email").value;
password = document.getElementById("password").value;

auth
  .signInWithEmailAndPassword(email, password)
  .then(function () {
    var user = auth.currentUser;
    var database_ref = database.ref();
    var user_data = {
      lastlogin: Date.now(),
    };
    database_ref.child("users/" + user.uid).update(user_data);
    alert("User Created");
  })
  .catch(function (error) {
    var error_code = error.code;
    var error_message = error.message;
    alert(error_message);
  });
