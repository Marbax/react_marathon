import { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = () => {
    const [isMenuActive, setMenuActive] = useState(false)

    const handleBurgerClick = () => setMenuActive((s) => !s)

    return (
        <>
            <Navbar menuActive={isMenuActive} handleBurgerClick={handleBurgerClick} />
            <Menu menuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
        </>
    )
}

export default MenuNavbar
