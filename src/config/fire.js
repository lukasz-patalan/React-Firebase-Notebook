import firebase from "firebase"
const config = {
    apiKey: "AIzaSyBxjuAUiXHv99LIkpDYZRSoNiQxNiHBPnk",
    authDomain: "authudemyhooks.firebaseapp.com",
    databaseURL: "https://authudemyhooks.firebaseio.com",
    projectId: "authudemyhooks",
    storageBucket: "",
    messagingSenderId: "497889367757",
    appId: "1:497889367757:web:d49caec517d04deaf1bb84"
};
const fire = firebase.initializeApp(config);
export default fire