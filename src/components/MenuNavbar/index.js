import { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = () => {
    const [isMenuActive, setMenuActive] = useState(null)

    const handleBurgerClick = () => setMenuActive((s) => !s)

    return (
        <>
            <Navbar isMenuActive={isMenuActive} handleBurgerClick={handleBurgerClick} />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
        </>
    )
}

export default MenuNavbar
