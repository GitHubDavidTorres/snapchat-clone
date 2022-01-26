import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCKK8yspexap34EORVR62SQ3ghv69Q1-3Y',
  authDomain: 'snapchatclone-339401.firebaseapp.com',
  projectId: 'snapchatclone-339401',
  storageBucket: 'snapchatclone-339401.appspot.com',
  messagingSenderId: '1089735162252',
  appId: '1:1089735162252:web:6bc7a79523c8402739fea9',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
