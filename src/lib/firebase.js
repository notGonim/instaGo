
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//here i want to import seed file 
import { seedDatabase } from '../seed.js'


const config = {
    apiKey: "AIzaSyDLmYJzMpm67dA94LC77XBUrbysC7DmF7A",
    authDomain: "instago-4e98b.firebaseapp.com",
    projectId: "instago-4e98b",
    storageBucket: "instago-4e98b.appspot.com",
    messagingSenderId: "3782018195",
    appId: "1:3782018195:web:0de2e711b98fb661f2b966"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore




//here is where i wanna call the seed file (only once)
seedDatabase(firebase)

export { firebase, FieldValue }