import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyB1FXb9M8qOoy0_i_ReJ8-Yr-1Hwei_EWw",
    authDomain: "react-2023-matheus.firebaseapp.com",
    projectId: "react-2023-matheus",
    storageBucket: "react-2023-matheus.appspot.com",
    messagingSenderId: "889383050297",
    appId: "1:889383050297:web:f42cc60d133d686e0641e8",
    measurementId: "G-CY1JKB8NNM"
  };
  
  // Initialize Firebase
  const  firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export {db};
  
