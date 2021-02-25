import cn from 'classnames'
import { ReactComponent as LoginSVG } from '../../../assets/login.svg'
import style from './style.module.css'

const Navbar = ({ handleBurgerClick, onClickLogin, isMenuActive, isBgActive = false }) => {
    return (
        <nav id={style.navbar} className={cn({ [style['bg-active']]: isBgActive })}>
            <div className={style['nav-wrapper']}>
                <p className={style.brand}>Mbx</p>
                <span className={style.btns}>
                    <span className={style['login-btn']} onClick={onClickLogin}>
                        <LoginSVG />
                    </span>
                    <span onClick={handleBurgerClick} className={cn(style['menu-button'], { [style.active]: isMenuActive })}>
                        <span />
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
