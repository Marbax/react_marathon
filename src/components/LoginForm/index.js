import { useEffect, useRef, useState } from 'react'
import Input from '../Input'

import style from './style.module.css'

const LoginForm = ({ onSubmit, isActive = false }) => {
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

    return (
        <form ref={formEl} onSubmit={handleFormSubmit}>
            <Input
                type={'email'}
                value={email}
                name={'email'}
                required
                onChange={(val) => setEmail(val)}
                label={'Email'}
            />
            <Input
                type={'password'}
                value={password}
                name={'password'}
                required
                onChange={(val) => setPassword(val)}
                label={'Password'}
            />
            <button className={style['submit-button']}> Login</button>
        </form>
    )
}

export default LoginForm
