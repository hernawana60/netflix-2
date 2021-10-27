import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBiZRkNK-KjR7e6pbghSRAzn5EaeSDUzlY",
  authDomain: "netflix-c59c6.firebaseapp.com",
  projectId: "netflix-c59c6",
  storageBucket: "netflix-c59c6.appspot.com",
  messagingSenderId: "468276372253",
  appId: "1:468276372253:web:2b1c8dc83d881db2c7b7f4",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
