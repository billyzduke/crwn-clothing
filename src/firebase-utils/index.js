import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCkK5qZSYKW_mt981Ffh_2cRzNAZMSSPf0",
  authDomain: "crwn-db-8c87d.firebaseapp.com",
  databaseURL: "https://crwn-db-8c87d.firebaseio.com",
  projectId: "crwn-db-8c87d",
  storageBucket: "crwn-db-8c87d.appspot.com",
  messagingSenderId: "239338729487",
  appId: "1:239338729487:web:9dc86a2152f7f030c7337a",
  measurementId: "G-2GQ3CZC5P1"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
