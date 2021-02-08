import { useState, useEffect } from 'react'
import PokemonCard from '../../components/PokemonCard'
import Layout from '../../components/Layout'
import database from '../../services/firebase'

import LayoutBg from '../../assets/bgSleepingPika.jpg'

import style from './style.module.css'

const GamePage = () => {
    const [pokemons, SetPokemons] = useState({})

    const handleCardClick = (pokemonId) => {
        Object.entries(pokemons).reduce((acc, item) => {
            const pokemon = { ...item[1] }
            if (pokemon.id === pokemonId) {
                pokemon.active = !pokemon.active
                database
                    .ref('pokemons/' + item[0])
                    .set({
                        ...pokemon,
                    })
                    .then(() => {
                        SetPokemons((prevState) => {
                            return { ...prevState, [item[0]]: pokemon }
                        })
                    })

                return null
            }
            return null
        }, {})
    }

    const handleAddPokeClick = () => {
        const newPostKey = database.ref().child('pokemons').push().key
        const newPoke = { ...Object.entries(pokemons)[0][1] }
        //TODO: remove
        //TEMP id gen
        newPoke.id = Object.entries(pokemons).reduce((max, item) => (item[1].id > max ? item[1].id : max), Object.entries(pokemons)[0][1].id)
        newPoke.id++
        newPoke.active = false
        //TEMP
        database
            .ref('pokemons/' + newPostKey)
            .set(newPoke)
            .then(() => {
                SetPokemons((prevState) => {
                    return { ...prevState, [newPostKey]: newPoke }
                })
            })
    }

    const syncStateWithDatabase = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            SetPokemons(snapshot.val())
        })
    }

    useEffect(() => {
        syncStateWithDatabase()
    }, [])

    return (
        <>
            <Layout urlBg={LayoutBg}>
                <button onClick={handleAddPokeClick}>Add pokemon</button>
                <div className={style['card-container']}>
                    {Object.entries(pokemons).map(([key, { id, type, img, name, values, bgImg, active }]) => (
                        <PokemonCard key={key} id={id} type={type} img={img} name={name} values={values} bgImg={bgImg} isActive={active} onClick={handleCardClick} />
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default GamePage
