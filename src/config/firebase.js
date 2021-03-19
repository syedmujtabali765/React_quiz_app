import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBheLV6xitWj2UOHuHuG9pCc0gkjv9GEYc",
    authDomain: "react-quiz-app-mj.firebaseapp.com",
    projectId: "react-quiz-app-mj",
    storageBucket: "react-quiz-app-mj.appspot.com",
    messagingSenderId: "289711404637",
    appId: "1:289711404637:web:ecff981d7ef82e9372bfb4",
    measurementId: "G-YW7KX3RWMC"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);