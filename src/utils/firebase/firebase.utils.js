import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAPw6XK1yy4l5HVmds9fWLtL52mDUfOlnc",
    authDomain: "crwn-clothing-db-c965f.firebaseapp.com",
    projectId: "crwn-clothing-db-c965f",
    storageBucket: "crwn-clothing-db-c965f.appspot.com",
    messagingSenderId: "491530472534",
    appId: "1:491530472534:web:9d3ad081b71751b451fff7"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
