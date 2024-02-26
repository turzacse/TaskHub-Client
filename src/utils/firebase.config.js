import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZUTkV0Wtq9Het_98AcHcWiezXrF-mN0o",
  authDomain: "taskhubb.firebaseapp.com",
  projectId: "taskhubb",
  storageBucket: "taskhubb.appspot.com",
  messagingSenderId: "949776830274",
  appId: "1:949776830274:web:f215b183960167fe0bc2db"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
