import cn from 'classnames'
import { useEffect, useRef } from 'react'

import style from './style.module.css'

const Modal = ({ title, children, clickCloseModal, isOpen }) => {
    const modalEl = useRef()

    useEffect(() => {
        // disable scrolling if modal opened
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : null
    }, [isOpen])

    const handleRootClick = (event) => {
        // if click wasnt on modal
        if (clickCloseModal && !modalEl.current.contains(event.target)) {
            clickCloseModal()
        }
    }

    return (
        <>
            <div onClick={handleRootClick} className={cn(style.root, { [style.open]: isOpen })}>
                <div ref={modalEl} className={style.modal}>
                    <div className={style.head}>
                        {title}
                        <span onClick={clickCloseModal && clickCloseModal} className={style.btnClose}></span>
                    </div>
                    <div className={style.content}>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Modal
