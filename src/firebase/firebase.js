import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBuzKzbUfNB7ejdUCcyEV7SPvE8LZfcjoo',
  authDomain: 'to-do-6ef37.firebaseapp.com',
  databaseURL: 'https://to-do-6ef37.firebaseio.com',
  projectId: 'to-do-6ef37',
  storageBucket: 'to-do-6ef37.appspot.com',
  messagingSenderId: '720315387821',
  appId: '1:720315387821:web:de81296594fe8c4d645b24',
  measurementId: 'G-4VGM9FBYEP'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
