import { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = ({ bgActive }) => {
    const [isMenuActive, setMenuActive] = useState(null)

    const handleBurgerClick = () => setMenuActive((s) => !s)

    return (
        <>
            <Navbar isBgActive={bgActive} isMenuActive={isMenuActive} handleBurgerClick={handleBurgerClick} />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
        </>
    )
}

export default MenuNavbar
