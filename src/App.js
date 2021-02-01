import { Route, BrowserRouter as Router } from 'react-router-dom'

import MenuNavbar from './components/MenuNavbar'
import HomePage from './routes/Home'
import GamePage from './routes/Game'

function App() {
    return (
        <Router>
            <MenuNavbar />
            <main>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/home' component={HomePage}></Route>
                <Route exact path='/game' component={GamePage}></Route>
            </main>
        </Router>
    )
}

export default App
