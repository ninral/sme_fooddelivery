import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBt6iU4YecRiWSc90Ud09AocuIYqoGbQQI",
    authDomain: "foodie-68d64.firebaseapp.com",
    projectId: "foodie-68d64",
    storageBucket: "foodie-68d64.appspot.com",
    messagingSenderId: "528340545222",
    appId: "1:528340545222:web:f816ac62ef1d2537ebb1c7",
    measurementId: "G-HTSGXEML3X"
  }

  let app = null
  if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
  }

  export default firebase
