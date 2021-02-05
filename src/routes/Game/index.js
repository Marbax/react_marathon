import { useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import Layout from '../../components/Layout'

import style from './style.module.css'

const GamePage = ({ pokemons }) => {
    const [pokemonsArr, SetPokemonsArr] = useState(pokemons)

    const handleCardClick = (pokemonId) => {
        SetPokemonsArr((state) => state.map((item) => (item.id === pokemonId ? { ...item, isActive: !item.isActive } : item)))
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
