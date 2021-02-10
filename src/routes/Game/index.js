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
    const [pokemonsSelected, SetPokemonsSelected] = useState([])
    const match = useRouteMatch()
    const history = useHistory()

    const handleGameStartClick = () => {
        history.push('/game/board')
    }

    const handleCardClick = (pokemonId) => {
        Object.entries(pokemons).reduce((acc, item) => {
            if (item[1].id === pokemonId) {
                const pokemon = { ...item[1] }
                if (pokemonsSelected.length < 5 && !pokemonsSelected.some((i) => i.id === pokemonId)) {
                    pokemon.isSelected = !pokemon.isSelected
                    SetPokemons((prevState) => {
                        return { ...prevState, [item[0]]: pokemon }
                    })
                    SetPokemonsSelected((prevState) => {
                        return [...prevState, { ...pokemon }]
                    })
                } else if (pokemonsSelected.length > 0 && pokemonsSelected.some((i) => i.id === pokemonId)) {
                    pokemon.isSelected = !pokemon.isSelected
                    SetPokemons((prevState) => {
                        return { ...prevState, [item[0]]: pokemon }
                    })
                    SetPokemonsSelected((prevState) => prevState.filter((i) => i.id !== pokemonId))
                }
            }
            return null
        }, {})
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
