
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
  // apiKey: "AIzaSyCHU27y5rsMZjBUBDCoPJ7ZxAmbT2JYd4w",
  // authDomain: "todoist-app-416bd.firebaseapp.com",
  // databaseURL: "https://todoist-app-416bd-default-rtdb.firebaseio.com",
  // projectId: "todoist-app-416bd",
  // storageBucket: "todoist-app-416bd.appspot.com",
  // messagingSenderId: "796056810582",
  // appId: "1:796056810582:web:dd095b2c693fb1f7e337f7",
  // measurementId: "G-0GMRZLLYW6",
  apiKey: "AIzaSyCHU27y5rsMZjBUBDCoPJ7ZxAmbT2JYd4w",
  authDomain: "todoist-app-416bd.firebaseapp.com",
  databaseURL: "https://todoist-app-416bd-default-rtdb.firebaseio.com",
  projectId: "todoist-app-416bd",
  storageBucket: "todoist-app-416bd.appspot.com",
  messagingSenderId: "796056810582",
  appId: "1:796056810582:web:dd095b2c693fb1f7e337f7",
  measurementId: "G-0GMRZLLYW6"

});

export {firebaseConfig as firebase}

