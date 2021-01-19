const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyBt6iU4YecRiWSc90Ud09AocuIYqoGbQQI",
    authDomain: "foodie-68d64.firebaseapp.com",
    projectId: "foodie-68d64",
    storageBucket: "foodie-68d64.appspot.com",
    messagingSenderId: "528340545222",
    appId: "1:528340545222:web:f816ac62ef1d2537ebb1c7",
    measurementId: "G-HTSGXEML3X"
  };

  firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig)
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

module.exports = firebase