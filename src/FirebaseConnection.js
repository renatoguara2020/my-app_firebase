import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {

    
    
    appId: "1:889383050297:web:f42cc60d133d686e0641e8",
    measurementId: "G-CY1JKB8NNM"
  };
  
  // Initialize Firebase
  const  firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export {db};
  
