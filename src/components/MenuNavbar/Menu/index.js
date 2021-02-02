import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import style from './style.module.css'

const Menu = ({ menuActive, handleLinkClick }) => {
    return (
        <div className={cn(style['menu-container'], menuActive ? style.active : style.deactive)}>
            <div className={style.overlay} />
            <div className={style['menu-items']}>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/game' activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                            GAME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/about' activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/contact' activeClassName={style.active} className={style['nav-link']} onClick={handleLinkClick}>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
