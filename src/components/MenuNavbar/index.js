import { useState } from 'react'
import Modal from '../Modal'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = ({ bgActive }) => {
    const [isMenuActive, setMenuActive] = useState(null)
    const [isModalOpen, setModalOpen] = useState(null)

    const handleBurgerClick = () => setMenuActive((prevState) => !prevState)
    const handleLoginClick = () => setModalOpen((prevState) => !prevState)
    const handleModalCloseClick = () => setModalOpen(false)

    return (
        <>
            <Navbar isBgActive={bgActive} isMenuActive={isMenuActive} handleBurgerClick={handleBurgerClick} onClickLogin={handleLoginClick} />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
            <Modal clickCloseModal={handleModalCloseClick} isOpen={isModalOpen} title='Login...'>
                <>
                    <input type='text' placeholder='Login' style={{ display: 'block', margin: '1rem auto', padding: '.3rem' }} />
                    <input type='password' placeholder='Paswword' style={{ display: 'block', margin: '1rem auto', padding: '.3rem' }} />
                    <div style={{ display: 'flex', margin: '1rem' }}>
                        <button style={{ display: 'block', margin: '1rem auto', padding: '.3rem', width: '33%' }}> Login</button>
                        <button style={{ display: 'block', margin: '1rem auto', padding: '.3rem', width: '33%' }} onClick={handleModalCloseClick}>
                            Cancel
                        </button>
                    </div>
                </>
            </Modal>
        </>
    )
}

export default MenuNavbar
