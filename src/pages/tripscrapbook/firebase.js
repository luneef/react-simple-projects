import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Setting up firebase API
const firebaseConfig = {
  apiKey: "AIzaSyBNB_UoHFyLM1UhXBBthu4FQvyH23BpG7I",
  authDomain: "trips-react.firebaseapp.com",
  databaseURL: "https://trips-react-default-rtdb.firebaseio.com",
  projectId: "trips-react",
  storageBucket: "trips-react.appspot.com",
  messagingSenderId: "405716068898",
  appId: "1:405716068898:web:b81df4edbba6456145387b",
};

// Assigning firebase API to variable
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
