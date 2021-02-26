import firebase from 'firebase/app'
import 'firebase/database'
import Pokemon from '../models/Pokemon'

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

class FirebaseService {
    constructor() {
        this.fire = firebase
        this.database = this.fire.database()
    }

    normalizePokemon = (poke) => new Pokemon({ ...poke })

    getPokemonsSocket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => cb(snapshot.val()))
    }

    offPokemonsSocket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnceAsync = async () => {
        return await this.database
            .ref('pokemons')
            .once('value')
            .then((snapshot) => snapshot.val())
    }

    updatePokemon = (key, poke) => {
        this.database.ref(`pokemons/${key}`).set(this.normalizePokemon(poke))
    }

    addPokemon = (poke, cb) => {
        const newPostKey = this.database.ref().child('pokemons').push().key
        this.database
            .ref(`pokemons/${newPostKey}`)
            .set(this.normalizePokemon(poke))
            .then(() => {
                cb && cb()
            })
    }
}

const FirebaseClass = new FirebaseService()

export default FirebaseClass
