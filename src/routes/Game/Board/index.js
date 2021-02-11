import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PokemonCard from '../../../components/PokemonCard'
import { PokemonContext } from '../../../context/pokemonContext'
import style from './style.module.css'

const BoardPage = () => {
    const { pokemonsSelected } = useContext(PokemonContext)
    const history = useHistory()

    if (Object.keys(pokemonsSelected).length < 1) {
        history.replace('/game')
    }

    return (
        <div className={style.root}>
            <div className={style.playerOne}>
                {pokemonsSelected &&
                    Object.entries(pokemonsSelected).map(([key, { id, type, img, name, values, bgImg }]) => (
                        <PokemonCard
                            key={key}
                            id={id}
                            type={type}
                            img={img}
                            name={name}
                            values={values}
                            bgImg={bgImg}
                            isActive={true}
                            minimize={true}
                            isSelected={false}
                            className={style.card}
                            onClick={() => console.log('clicked')}
                        />
                    ))}
            </div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    )
}

export default BoardPage
