import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAc8uuxvM7CkOrY5bbc5p1yjzLLINoRr1g',
  authDomain: 'harmonies-locales.firebaseapp.com',
  projectId: 'harmonies-locales',
  storageBucket: 'harmonies-locales.firebasestorage.app',
  messagingSenderId: '383478262217',
  appId: '1:383478262217:web:d9b3727bbdeb4da6b12018',
  measurementId: 'G-C5FWCQB13Z',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
