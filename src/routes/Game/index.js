import { useState, useEffect, useContext } from 'react'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import { PokemonContext } from '../../context/pokemonContext'
import { DatabaseContext } from '../../context/databaseContext'

import StartPage from './Start'
import BoardPage from './Board'
import FinishPage from './Finish'

const GamePage = () => {
    const firebase = useContext(DatabaseContext)
    const [pokemons, SetPokemons] = useState({})
    const [pokemonsSelected, SetPokemonsSelected] = useState({})
    const match = useRouteMatch()
    const history = useHistory()

    const handleGameStartClick = () => {
        history.push('/game/board')
    }

    const handleCardClick = (outerKey) => {
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

    useEffect(() => {
        firebase.getPokemonsSocket((pokes) => {
            SetPokemons(pokes)
        })
        return () => firebase.offPokemonsSocket()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PokemonContext.Provider value={{ handleCardClick, handleGameStartClick, pokemons, pokemonsSelected }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    )
}

export default GamePage
