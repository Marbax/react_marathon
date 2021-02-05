import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'

import MenuNavbar from './components/MenuNavbar'
import HomePage from './routes/Home'
import GamePage from './routes/Game'
import AboutPage from './routes/About'
import ContactPage from './routes/Contact'
import NotFound from './routes/NotFound'

import PokemonsSourceFile from './assets/PokemonCards.json'

const App = () => {
    const POKEMONS = PokemonsSourceFile
    const isRoot = useRouteMatch('/')
    return (
        <Switch>
            <Route path='/404' component={NotFound} />
            <Route>
                <MenuNavbar bgActive={!isRoot.isExact} />
                <main>
                    <Switch>
                        <Route exact path='/' component={HomePage}></Route>
                        <Route path='/home' component={HomePage}></Route>
                        <Route path='/game'>
                            <GamePage pokemons={POKEMONS} />
                        </Route>
                        <Route path='/about' component={AboutPage} />
                        <Route path='/contact' component={ContactPage} />
                        <Route
                            render={() => {
                                return <Redirect to='/404' />
                            }}
                        />
                    </Switch>
                </main>
            </Route>
        </Switch>
    )
}

export default App
