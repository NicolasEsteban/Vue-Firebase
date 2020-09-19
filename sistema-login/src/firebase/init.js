import firebase from 'firebase/app';
//import farestore from 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx9MxYkF_59I3gDzFxSAymTHYed11uAw4",
    authDomain: "loginbd-4f5dd.firebaseapp.com",
    databaseURL: "https://loginbd-4f5dd.firebaseio.com",
    projectId: "loginbd-4f5dd",
    storageBucket: "loginbd-4f5dd.appspot.com",
    messagingSenderId: "666050272024",
    appId: "1:666050272024:web:087801c3ac43cdac905c6d",
    measurementId: "G-GFPL9BNPE2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});
  //firebase.analytics();

  export default firebaseApp.firestore();
