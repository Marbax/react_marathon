import cn from 'classnames'

import style from './style.module.css'

const Navbar = ({ handleBurgerClick, isMenuActive }) => {
    return (
        <nav id={style.navbar} className={!isMenuActive && style['bg-active']}>
            <div className={style['nav-wrapper']}>
                <p className={style.brand}>Mbx</p>
                <span onClick={handleBurgerClick} className={cn(style['menu-button'], isMenuActive && style.active)}>
                    <span />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
