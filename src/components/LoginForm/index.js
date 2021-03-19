import { useEffect, useRef, useState } from 'react'
import Input from '../Input'

import style from './style.module.css'

const LoginForm = ({ onSubmit, onChangeFormState, isLoginForm = true, isActive = false }) => {
    const emailRegEx = '[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    const passwordRegEx = '[A-Za-z0-9._%+-]{6,16}$'
    const formEl = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        formEl.current.reset()
        setEmail('')
        setPassword('')
    }, [isActive])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit && onSubmit({ email, password })
    }

    const handleChangeStateClick = (e) => {
        e.preventDefault()
        onChangeFormState && onChangeFormState()
    }

    return (
        <form ref={formEl} onSubmit={handleFormSubmit}>
            <Input
                type={'text'}
                value={email}
                name={'email'}
                required
                pattern={emailRegEx}
                onChange={(val) => setEmail(val)}
                label={'Email'}
            />
            <Input
                type={'password'}
                value={password}
                name={'password'}
                required
                pattern={passwordRegEx}
                onChange={(val) => setPassword(val)}
                label={'Password'}
            />
            <div className={style['btn-container']}>
                <button className={style['submit-button']}>
                    {isLoginForm ? 'Login' : 'Register'}
                </button>
                <button onClick={handleChangeStateClick} className={style['change-state-btn']}>
                    {isLoginForm ? 'Register?' : 'Login?'}
                </button>
            </div>
        </form>
    )
}

export default LoginForm
