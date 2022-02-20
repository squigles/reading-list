import { initializeApp } from 'firebase/app'
import { getFirestore } from'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQi-CSepHUp3NBrVr7qM8MMK62OZPjPSs",
    authDomain: "fb9-reading-list-475f5.firebaseapp.com",
    projectId: "fb9-reading-list-475f5",
    storageBucket: "fb9-reading-list-475f5.appspot.com",
    messagingSenderId: "7637787939",
    appId: "1:7637787939:web:3d0aa0f7ebff33c2e0d896"
  };

  // init firebase
  initializeApp(firebaseConfig)
  
  // init services
  const db = getFirestore()
  const auth = getAuth()

  export { db, auth }