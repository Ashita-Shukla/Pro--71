import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";


 const firebaseConfig = {
  apiKey: "AIzaSyDFKDFTx32ePF_R9G4cwS1zrSpA2qNQWVc",
  authDomain: "complaint-forum-1e922.firebaseapp.com",
  projectId: "complaint-forum-1e922",
  storageBucket: "complaint-forum-1e922.appspot.com",
  messagingSenderId: "329723649831",
  appId: "1:329723649831:web:81a3d4281af4c2a91f9302"
}

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

