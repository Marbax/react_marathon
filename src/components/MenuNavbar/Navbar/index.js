import cn from 'classnames'

import style from './style.module.css'

const Navbar = ({ handleBurgerClick, menuActive }) => {
    return (
        <nav id={style.navbar} className={!menuActive && style['bg-active']}>
            <div className={style['nav-wrapper']}>
                <p className={style.brand}>Mbx</p>
                <span onClick={handleBurgerClick} className={cn(style['menu-button'], menuActive && style.active)}>
                    <span />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
