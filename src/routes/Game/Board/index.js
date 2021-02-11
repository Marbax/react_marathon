import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PokemonCard from '../../../components/PokemonCard'
import { PokemonContext } from '../../../context/pokemonContext'
import style from './style.module.css'

const BoardPage = () => {
    const history = useHistory()
    //    if (Object.keys(pokemonsSelected).length < 1) {
    //        history.replace('/game')
    //    }

    const [board, SetBoard] = useState([])
    const [oponent, setOponent] = useState([])

    const { pokemonsSelected } = useContext(PokemonContext)

    const syncBoard = async () => {
        const boardResp = await fetch('https://reactmarathon-api.netlify.app/api/board')
        const boardData = await boardResp.json()
        SetBoard(boardData.data)
    }

    const initOponent = async () => {
        const oponentResp = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const oponentData = await oponentResp.json()
        setOponent(oponentData.data)
    }

    useEffect(() => {
        syncBoard()

        initOponent()
    }, [])

    const handleBoardPlateClick = (position) => {
        console.log(position)
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
                {board &&
                    board.map((item) => {
                        return (
                            <div className={style.boardPlate} key={item.position} onClick={() => !item.card && handleBoardPlateClick(item.position)}>
                                {item.card && <PokemonCard {...item} minimize />}
                            </div>
                        )
                    })}
            </div>
            <div className={style.playerTwo}>
                {oponent &&
                    oponent.map(({ id, type, img, name, values, bgImg }, index) => (
                        <PokemonCard
                            key={`${id}-${index}`}
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
        </div>
    )
}

export default BoardPage
