import { useContext } from 'react'
import PokemonCard from '../../../components/PokemonCard'
import Layout from '../../../components/Layout'

import LayoutBg from '../../../assets/bgSleepingPika.jpg'

import style from './style.module.css'
import { PokemonContext } from '../../../context/pokemonContext'

const GamePage = () => {
    const resources = useContext(PokemonContext)

    const handleGameStartClick = () => {
        resources.handleGameStartClick && resources.handleGameStartClick()
    }

    const handleSelectPokemon = (key) => {
        resources.handleCardClick && resources.handleCardClick(key)
    }

    return (
        <>
            <Layout urlBg={LayoutBg}>
                <button className={style['start-button']} disabled={Object.keys(resources.pokemonsSelected).length < 5} onClick={handleGameStartClick}>
                    Start Game
                </button>
                <div className={style['card-container']}>
                    {resources.pokemons &&
                        Object.entries(resources.pokemons).map(([key, { id, type, img, name, values, bgImg, isSelected }]) => (
                            <PokemonCard
                                key={key}
                                outerKey={key}
                                id={id}
                                type={type}
                                img={img}
                                name={name}
                                values={values}
                                bgImg={bgImg}
                                isActive={true}
                                isSelected={isSelected}
                                className={style['large-card']}
                                onClick={handleSelectPokemon}
                            />
                        ))}
                </div>
            </Layout>
        </>
    )
}

export default GamePage
