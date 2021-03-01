import cn from 'classnames'

import style from './style.module.css'
const Input = ({ value, label, type = 'text', name, onChange, required = false }) => {
    return (
        <div className={style.root}>
            <input
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={type}
                className={cn(style.input, { [style.valid]: value })}
                name={name}
                required={required}
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.label}>{label}</label>
        </div>
    )
}

export default Input
