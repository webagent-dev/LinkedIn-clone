    import firebase from 'firebase/app'
    import 'firebase/auth'
    import 'firebase/firestore'

    const Config = {
    apiKey: "AIzaSyB913C27MqEFPqLI5wjqEhbt85fR0wH0ZQ",
    authDomain: "linkedln-clone-73b5d.firebaseapp.com",
    projectId: "linkedln-clone-73b5d",
    storageBucket: "linkedln-clone-73b5d.appspot.com",
    messagingSenderId: "601119686660",
    appId: "1:601119686660:web:f8080c7369d01ff3457551"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export default firebase

  