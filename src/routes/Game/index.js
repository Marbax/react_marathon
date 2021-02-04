import { useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import Layout from '../../components/Layout'

import style from './style.module.css'

const GamePage = ({ pokemons }) => {
    const [pokemonsArr, SetPokemonsArr] = useState(pokemons)

    const handleCardClick = (cardId) => {
        SetPokemonsArr((state) => {
            const index = state.findIndex((item) => item.id === cardId)
            const oldItem = state[index]
            const newitem = { ...oldItem, isActive: !oldItem.isActive }
            return [...state.slice(0, index), newitem, ...state.slice(index + 1)]
        })
    }

    return (
        <>
            <Layout colorBg={'purple'}>
                <div className={style['card-container']}>
                    {pokemonsArr && pokemonsArr.map((item) => <PokemonCard key={`${item.id}`} {...item} onClick={handleCardClick} isActive={item.isActive} />)}
                </div>
            </Layout>
        </>
    )
}

export default GamePage
