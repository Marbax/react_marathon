import { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    const handleBurgerClick = () => setMenuActive((s) => !s)

    return (
        <>
            <Navbar menuActive={menuActive} handleBurgerClick={handleBurgerClick} />
            <Menu menuActive={menuActive} handleLinkClick={handleBurgerClick} />
        </>
    )
}

export default MenuNavbar
