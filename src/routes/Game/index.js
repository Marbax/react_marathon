import { NavLink } from 'react-router-dom'

import style from './style.module.css'

const GamePage = () => {
    return (
        <div className={style.plug}>
            <h1>This is Game</h1>
            <p>Battles will begin soon.</p>
            <NavLink exact to='/' activeClassName='active' className={style['nav-link']}>
                Back to Home
            </NavLink>
        </div>
    )
}

export default GamePage
