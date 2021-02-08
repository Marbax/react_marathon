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

    return (
        <>
            <Layout urlBg={LayoutBg}>
                <button className={style['start-button']} disabled={resources.pokemonsSelected.length < 5} onClick={handleGameStartClick}>
                    Start Game
                </button>
                <div className={style['card-container']}>
                    {resources.pokemons &&
                        Object.entries(resources.pokemons).map(([key, { id, type, img, name, values, bgImg, isSelected }]) => (
                            <PokemonCard
                                key={key}
                                id={id}
                                type={type}
                                img={img}
                                name={name}
                                values={values}
                                bgImg={bgImg}
                                isActive={true}
                                isSelected={isSelected}
                                className={style['large-card']}
                                onClick={resources.handleCardClick}
                            />
                        ))}
                </div>
            </Layout>
        </>
    )
}

export default GamePage
