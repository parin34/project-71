import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyAYy8ziR3efp489ARpPMwv5AcCGmhxXqMs",
    authDomain: "project-71-61ec1.firebaseapp.com",
    databaseURL:"https://project-71-61ec1.firebaseio.com",
    projectId: "project-71-61ec1",
    storageBucket: "project-71-61ec1.appspot.com",
    messagingSenderId: "928450158958",
    appId: "1:928450158958:web:30cffe6bf1368fdde8a17f"
  };
  

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

