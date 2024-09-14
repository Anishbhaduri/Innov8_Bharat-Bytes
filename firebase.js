  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpuHIpAypAqby5d0QEfjCeNCn-JwhlpSY",
    authDomain: "bharatbytesdev.firebaseapp.com",
    projectId: "bharatbytesdev",
    storageBucket: "bharatbytesdev.appspot.com",
    messagingSenderId: "791544305579",
    appId: "1:791544305579:web:960860009b576ff1e4e4ee",
    measurementId: "G-TKS2R26Z8S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
