import { useState, useEffect, useContext } from 'react'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import { PokemonContext } from '../../context/pokemonContext'
import { DatabaseContext } from '../../context/databaseContext'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsAsync, selectPokemonsData } from '../../store/pokemons'

import StartPage from './Start'
import BoardPage from './Board'
import FinishPage from './Finish'

const GamePage = () => {
    const firebase = useContext(DatabaseContext)
    const [isGameFinished, SetGameFinished] = useState(false)
    const [isPlayerWon, SetPlayerWon] = useState(false)
    const [pokemons, SetPokemons] = useState({})
    const [pokemonsSelected, SetPokemonsSelected] = useState({})
    const [oponetsHand, SetOponetsHand] = useState([])
    const match = useRouteMatch()
    const history = useHistory()
    const pokemonsRedux = useSelector(selectPokemonsData)
    const dispatch = useDispatch()
    const startGame = () => {
        history.push('/game/board')
    }

    const goToFinishPage = () => {
        SetGameFinished(true)
        history.push('/game/finish')
    }

    const selectPokemon = (outerKey) => {
        if (Object.keys(pokemonsSelected).length < 5 || pokemons[outerKey].isSelected) {
            const pokemon = { ...pokemons[outerKey] }

            SetPokemons((prevState) => {
                return { ...prevState, [outerKey]: { ...prevState[outerKey], isSelected: !prevState[outerKey].isSelected } }
            })

            SetPokemonsSelected((prevState) => {
                if (prevState[outerKey]) {
                    const copiedState = { ...prevState }
                    delete copiedState[outerKey]
                    return copiedState
                }
                return { ...prevState, [outerKey]: pokemon }
            })
        }
    }

    const endGame = (card) => {
        if (card) {
            const pokeToAdd = { ...card }
            delete pokeToAdd.isSelected
            firebase.addPokemon(pokeToAdd)
        }
        history.replace('/game')
        resetData()
    }

    const makePlayerWon = () => {
        SetPlayerWon(true)
    }

    const initOponent = async () => {
        const oponentResp = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const oponentData = await oponentResp.json()
        SetOponetsHand(oponentData.data.map((item) => ({ ...item, possession: 'red' })))
    }

    const resetData = async () => {
        dispatch(getPokemonsAsync())
        SetPokemonsSelected({})
        SetGameFinished(false)
        SetPlayerWon(false)
        initOponent()
    }

    useEffect(() => {
        SetPokemons({ ...pokemonsRedux })
    }, [pokemonsRedux])

    useEffect(() => {
        resetData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemons, pokemonsSelected, oponetsHand, isGameFinished, isPlayerWon, goToFinishPage, endGame, makePlayerWon, selectPokemon, startGame }}>
            <Switch>
                <Route exact path={`${match.path}/`} component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    )
}

export default GamePage
