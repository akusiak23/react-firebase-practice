import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkiSknJrzD0S6Q6QulI_v-qAQ2i7VonDU",
    authDomain: "practice-firebase-507f4.firebaseapp.com",
    databaseURL: "https://practice-firebase-507f4.firebaseio.com",
    projectId: "practice-firebase-507f4",
    storageBucket: "practice-firebase-507f4.appspot.com",
    messagingSenderId: "889421963066"
}

const fire = firebase.initializeApp(config); 
export default fire;