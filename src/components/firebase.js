import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQ0M_9lZavh5K8XZvp5vYqnhUHTevlBKY",
    authDomain: "tind-clone.firebaseapp.com",
    databaseURL: "https://tind-clone.firebaseio.com",
    projectId: "tind-clone",
    storageBucket: "tind-clone.appspot.com",
    messagingSenderId: "956763647604",
    appId: "1:956763647604:web:38e4fa6fa6fef0c4ad6b21",
    measurementId: "G-7QEN1VYPC1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;