import { useContext } from 'react'
import PokemonCard from '../../../components/PokemonCard'
import Layout from '../../../components/Layout'

import LayoutBg from '../../../assets/bgSleepingPika.jpg'

import style from './style.module.css'
import { PokemonContext } from '../../../context/pokemonContext'

const GamePage = () => {
    const { startGame, selectPokemon, pokemonsSelected, pokemons } = useContext(PokemonContext)

    const handleGameStartClick = () => {
        startGame && startGame()
    }

    const handleSelectPokemonClick = (key) => {
        selectPokemon && selectPokemon(key)
    }

    return (
        <>
            <Layout urlBg={LayoutBg} title={'Choose your cards'}>
                <button className={style['start-button']} disabled={Object.keys(pokemonsSelected).length < 5} onClick={handleGameStartClick}>
                    Start Game
                </button>
                <div className={style['card-container']}>
                    {pokemons &&
                        Object.entries(pokemons).map(([key, { id, type, img, name, values, bgImg, isSelected }]) => (
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
                                onClick={handleSelectPokemonClick}
                            />
                        ))}
                </div>
            </Layout>
        </>
    )
}

export default GamePage
