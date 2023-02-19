import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  // Your Firebase configuration goes here
  apiKey: "AIzaSyANjaVjbPk_JsJp60PZYGHxy-sqHuZdkzw",
            authDomain: "chatme-2ebf4.firebaseapp.com",
            projectId: "chatme-2ebf4",
            storageBucket: "chatme-2ebf4.appspot.com",
            messagingSenderId: "1060710336790",
            appId: "1:1060710336790:web:bfb3eb65397beee1516837"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
