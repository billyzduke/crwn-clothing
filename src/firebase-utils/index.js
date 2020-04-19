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

export const createUserProfileDoc = async (userAuth, ...etcData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  console.log(snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...etcData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// firestore.collections('users').doc('[userId]').collection('cartItems').doc('[itemId]')
// firestore.collections('users/[userId]/cartItems')
// firestore.doc('users/[userId]/cartItems/[itemId]')

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
