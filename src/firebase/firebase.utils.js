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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Firestore returns us 2 types of objects:
  // (1) QueryReference - it represents the 'current' place in the db that we're querying, it doesn't have actual data
  //     Ex: firestore.doc('users/:userId')
  // (2) QuerySnapshot - it contains zero or more DocumentSnapshot objects representing the results of a query

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Creating user error ", err.message);
    }
  }

  return userRef;
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
