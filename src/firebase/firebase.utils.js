import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNB5SG5ojBDojsIC3fuywPDC1Wg5J_bbM",
  authDomain: "e-commerce-react-84c42.firebaseapp.com",
  databaseURL: "https://e-commerce-react-84c42.firebaseio.com",
  projectId: "e-commerce-react-84c42",
  storageBucket: "e-commerce-react-84c42.appspot.com",
  messagingSenderId: "249693776248",
  appId: "1:249693776248:web:dfb436c9d1d51bee5a808d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Sets the OAuth custom parameters to pass in a Google OAuth request for popup and redirect sign-in operations.
// The authorization server prompts the user to select a user account. This allows a user who has multiple accounts at the authorization server to select amongst the multiple accounts that they may have current sessions for.
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
