"use strict";
const logoItem = document.querySelector(".company-logo");

const menuToggle = document.querySelector(".menu-toggle");
const bxMenu = document.querySelector(".bx-menu");
const bxX = document.querySelector(".bx-x");
const linkItems = document.querySelector("nav-link");

const navBar = document.querySelector(".navbar");

// --- open menu ---

bxMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-menu")) {
    navBar.classList.add("show-navbar");
    bxMenu.classList.add("hide-bx");
    bxX.classList.add("show-bx");
    logoItem.style.color = "white";
    linkItems.style.color = "white";
  }
});

// --- close menu ---

bxX.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    navBar.classList.remove("show-navbar");
    bxMenu.classList.remove("hide-bx");
    bxX.classList.remove("show-bx");
    logoItem.style.color = "black";
    linkItems.classList.remove = "white-nav";
  }
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

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
