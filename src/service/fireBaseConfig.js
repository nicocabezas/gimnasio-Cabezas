import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApV5SPT5HAXkbd4-medY8pRb3wnJCi8Lo",
    authDomain: "gimnasio-cabezas.firebaseapp.com",
    projectId: "gimnasio-cabezas",
    storageBucket: "gimnasio-cabezas.appspot.com",
    messagingSenderId: "693442265348",
    appId: "1:693442265348:web:43ab8c2542635653bed051"
  };

  //inicializo app de acuerdo a las llaves que tenemos
  export const app = firebase.initializeApp(firebaseConfig);
 
  
    //agregando nuestras funciones y conexion con nuestro firestore
  export function getFirestore(){
      return firebase.firestore(app)
  }