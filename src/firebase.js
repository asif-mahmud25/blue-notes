import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdPJd1uxQsuLXcBdTEavEeT69zCd1y4XM",
  authDomain: "blue-notes-294ef.firebaseapp.com",
  databaseURL: "https://blue-notes-294ef.firebaseio.com",
  projectId: "blue-notes-294ef",
  storageBucket: "blue-notes-294ef.appspot.com",
  messagingSenderId: "804429613620",
  appId: "1:804429613620:web:ef16d7ff93f2e776bf9861"
});

const db = firebaseApp.firestore();

export default db;