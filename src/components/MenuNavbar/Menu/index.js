import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import style from './style.module.css'

const Menu = ({ menuActive, handleLinkClick }) => {
    const PAGES = [
        { path: '/', name: 'HOME' },
        { path: '/game', name: 'GAME' },
        { path: '/about', name: 'ABOUT' },
        { path: '/contact', name: 'CONTACT' },
    ]

    return (
        <div className={cn(style['menu-container'], menuActive ? style.active : style.deactive)}>
            <div className={style.overlay} />
            <div className={style['menu-items']}>
                <ul>
                    {PAGES.map((i) => (
                        <li key={i.name}>
                            <NavLink exact to={i.path} activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                                {i.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu
