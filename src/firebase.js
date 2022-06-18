import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBKSgk30WBtatrX9aPi58oUXD9cgwlYr6Y",
    authDomain: "new-idobatakaigi.firebaseapp.com",
    databaseURL: "https://new-idobatakaigi-default-rtdb.firebaseio.com",
    projectId: "new-idobatakaigi",
    storageBucket: "new-idobatakaigi.appspot.com",
    messagingSenderId: "450932502155",
    appId: "1:450932502155:web:9255a3508cf5c47cd62e8e"
  };

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
const messageRef = ref(db, 'messages');

export const pushMessage =({name, text}) => {
    const newMessageRef = push(messageRef);
    set(newMessageRef, {
        name: name,
        text: text
    });
}