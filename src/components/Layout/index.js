import cn from 'classnames'

import style from './style.module.css'

const Layout = ({ id, title, descr, urlBg, colorBg, children }) => {
    return (
        <section className={style.root} id={id}>
            <div className={style.root} style={{ backgroundImage: urlBg && `url('${urlBg}')`, backgroundColor: colorBg }}>
                <article>
                    <div className={style.title}>
                        {title && <h3>{title}</h3>}
                        <span className={style.separator}></span>
                    </div>
                    {(descr || children) && (
                        <div className={cn(style.desc, style.full)}>
                            {descr && <p>{descr}</p>}
                            {children}
                        </div>
                    )}
                </article>
            </div>
        </section>
    )
}

export default Layout
