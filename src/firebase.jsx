// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from "firebase/firestore";

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDRjwWb2kHwVGy8t4d0A4xqXuxcgRvOCOQ",
  authDomain: "devdeakin-homepage.firebaseapp.com",
  projectId: "devdeakin-homepage",
  storageBucket: "devdeakin-homepage.appspot.com",  // 🔥 fixed typo (.firebasestorage.app → .appspot.com)
  messagingSenderId: "386729154238",
  appId: "1:386729154238:web:faa48fc2b73e483ecf30ef"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// Auth & Firestore instances
export const auth = getAuth();
export const db = getFirestore();

// Google Sign-in
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Create user document in Firestore
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in creating ", error.message);
    }
  }

  return userDocRef;
};

// Sign up with email & password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with email & password
export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
