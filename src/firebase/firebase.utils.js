import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0KM0Wx0rYTVFia8TrNtpwCc-4-KG1TF4",
        authDomain: "crwn-db-377f6.firebaseapp.com",
    databaseURL: "https://crwn-db-377f6.firebaseio.com",
    projectId: "crwn-db-377f6",
    storageBucket: "crwn-db-377f6.appspot.com",
    messagingSenderId: "300991500782",
    appId: "1:300991500782:web:27e3dd0d621acd0d62beff",
    measurementId: "G-PGWYKQE68X"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new  firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt: 'select account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;