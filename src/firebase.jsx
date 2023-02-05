// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdSpH2bapYFL7dWr_LRBUBwWD5YB25-FM',
  authDomain: 'react-fb-auth-4184b.firebaseapp.com',
  projectId: 'react-fb-auth-4184b',
  storageBucket: 'react-fb-auth-4184b.appspot.com',
  messagingSenderId: '836558522105',
  appId: '1:836558522105:web:ffac156a4a5cc8ca0e8428'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
