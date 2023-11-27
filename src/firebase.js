import { initializeApp } from "firebase/app";
// import {config} from 'dotenv';
// config()
const firebaseConfig = {  
  // apiKey: process.env.REACT_APP_apikey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
  apiKey: "AIzaSyAg_Eun2g7bUrkWCo4fE6rpJkfYrKoQM0w",
  authDomain: "mecmatrimony-4f382.firebaseapp.com",
  projectId: "mecmatrimony-4f382",
  storageBucket: "mecmatrimony-4f382.appspot.com",
  messagingSenderId: "715860537976",
  appId: "1:715860537976:web:4157b687942cb7c9fd338d"

};


export const app = initializeApp(firebaseConfig);