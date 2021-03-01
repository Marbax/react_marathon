import { useState } from 'react'
import LoginForm from '../LoginForm'
import Modal from '../Modal'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = ({ bgActive }) => {
    const [isMenuActive, setMenuActive] = useState(null)
    const [isModalOpen, setModalOpen] = useState(null)

    const handleBurgerClick = () => setMenuActive((prevState) => !prevState)
    const handleLoginClick = () => setModalOpen((prevState) => !prevState)
    const handleModalCloseClick = () => setModalOpen(false)
    const handleSubmitLoginForm = (data) => console.log(data)

    return (
        <>
            <Navbar
                isBgActive={bgActive}
                isMenuActive={isMenuActive}
                handleBurgerClick={handleBurgerClick}
                onClickLogin={handleLoginClick}
            />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
            <Modal clickCloseModal={handleModalCloseClick} isOpen={isModalOpen} title='Login...'>
                <LoginForm onSubmit={handleSubmitLoginForm} isActive={isModalOpen}></LoginForm>
            </Modal>
        </>
    )
}

export default MenuNavbar
