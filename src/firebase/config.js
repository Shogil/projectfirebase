import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACsuHMLqfsIMBOm87KyQzwWr77As8KUxY",
    authDomain: "demopr-4478a.firebaseapp.com",
    projectId: "demopr-4478a",
    storageBucket: "demopr-4478a.appspot.com",
    messagingSenderId: "609485303544",
    appId: "1:609485303544:web:0c54b1258ad0ab7816950d",
    measurementId: "G-NNYJ888M1N"
  };

 export const firebase = firebase.initializeApp(firebaseConfig)