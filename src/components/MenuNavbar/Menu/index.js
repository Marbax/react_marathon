import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import style from './style.module.css'

const PAGES = [
    { path: '/', name: 'HOME' },
    { path: '/game', name: 'GAME' },
    { path: '/about', name: 'ABOUT' },
    { path: '/contact', name: 'CONTACT' },
]

const Menu = ({ isMenuActive, handleLinkClick }) => {
    return (
        <div className={cn(style['menu-container'], { [style.active]: isMenuActive === true, [style.deactive]: isMenuActive === false })}>
            <div className={style.overlay} />
            <div className={style['menu-items']}>
                <ul>
                    {PAGES.map(({ path, name }) => (
                        <li key={name}>
                            <NavLink exact to={path} activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu
