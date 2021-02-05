import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyASlp4cZJVb8_WdhrE6PJKgUy_ghYNjo2A',
    authDomain: 'pokemon-game-1f608.firebaseapp.com',
    databaseURL: 'https://pokemon-game-1f608-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'pokemon-game-1f608',
    storageBucket: 'pokemon-game-1f608.appspot.com',
    messagingSenderId: '564953470709',
    appId: '1:564953470709:web:842aec4a99b8823a62d7bc',
}

firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()

export default database
