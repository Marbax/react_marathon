import { useState } from 'react'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = ({ bgActive }) => {
    const [isMenuActive, setMenuActive] = useState(null)
    const [isModalOpen, setModalOpen] = useState(null)

    const handleBurgerClick = () => setMenuActive((prevState) => !prevState)
    const handleLoginClick = () => {
        setModalOpen((prevState) => !prevState)
        console.log('login')
    }

    return (
        <>
            <Navbar isBgActive={bgActive} isMenuActive={isMenuActive} handleBurgerClick={handleBurgerClick} onClickLogin={handleLoginClick} />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
        </>
    )
}

export default MenuNavbar
