import { useState } from 'react'
import { firebaseSignInUrl, firebaseSignUpUrl } from '../../services/firebase'
import LoginForm from '../LoginForm'
import Modal from '../Modal'
import { NotificationManager } from 'react-notifications'

import Menu from './Menu'
import Navbar from './Navbar'

const MenuNavbar = ({ bgActive }) => {
    const [isMenuActive, setMenuActive] = useState(null)
    const [isModalOpen, setModalOpen] = useState(null)
    //state to display login or register form and to proccess submit differently
    const [isLoginForm, setLoginForm] = useState(true)

    const handleBurgerClick = () => setMenuActive((prevState) => !prevState)
    const handleLoginClick = () => setModalOpen((prevState) => !prevState)
    const handleModalCloseClick = () => setModalOpen(false)
    const handleSubmitLoginForm = async ({ email, password }) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        }
        const resp = await fetch(
            isLoginForm ? firebaseSignInUrl : firebaseSignUpUrl,
            requestOptions
        )
        const data = await resp.json()

        if (data.hasOwnProperty('error')) {
            NotificationManager.error(data?.error?.message, 'Oops...')
        } else {
            NotificationManager.success(
                `${data?.email} successfully ${isLoginForm ? 'logined' : 'registered'}.`,
                'Gotcha'
            )
            console.log(data)
        }
    }
    const handleChangeFormState = () => setLoginForm((prevState) => !prevState)

    return (
        <>
            <Navbar
                isBgActive={bgActive}
                isMenuActive={isMenuActive}
                handleBurgerClick={handleBurgerClick}
                onClickLogin={handleLoginClick}
            />
            <Menu isMenuActive={isMenuActive} handleLinkClick={handleBurgerClick} />
            <Modal
                clickCloseModal={handleModalCloseClick}
                isOpen={isModalOpen}
                title={isLoginForm ? 'Login...' : 'Register...'}>
                <LoginForm
                    login={isLoginForm}
                    onChangeFormState={handleChangeFormState}
                    onSubmit={handleSubmitLoginForm}
                    isActive={isModalOpen}></LoginForm>
            </Modal>
        </>
    )
}

export default MenuNavbar
