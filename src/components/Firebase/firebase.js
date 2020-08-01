import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXFv6pmMwbsE2KHbiu3mN3ZPffosIm2sY",
    authDomain: "bobportfolio-7e757.firebaseapp.com",
    databaseURL: "https://bobportfolio-7e757.firebaseio.com/",
    projectId: "bobportfolio-7e757",
    appId: "1:434067168873:web:91948ab2eeff86e348ccf8",
    storageBucket: "gs://bobportfolio-7e757.appspot.com",
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}

export default Firebase;