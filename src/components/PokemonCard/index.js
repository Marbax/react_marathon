import cn from 'classnames'

import style from './style.module.css'
import defCardBg from '../../assets/card-back-side.jpg'

const PokemonCard = ({ id, abilities, stats, type, img, name, base_experiencem, height, values, bgImg, onClick, isActive }) => {
    const handleClick = () => {
        onClick && onClick(id)
    }

    return (
        <div className={style.root} onClick={handleClick}>
            <div className={cn(style.pokemonCard, { [style.active]: isActive })}>
                <div className={style.cardFront}>
                    <div className={`${style.wrap} ${style.front}`}>
                        <div className={`${style.pokemon} ${style[type]}`}>
                            <div className={style.values}>
                                <div className={cn(style.count, style.top)}>{values.top}</div>
                                <div className={cn(style.count, style.right)}>{values.right}</div>
                                <div className={cn(style.count, style.bottom)}>{values.bottom}</div>
                                <div className={cn(style.count, style.left)}>{values.left}</div>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={style.info}>
                                <span className={style.number}>#{id}</span>
                                <h3 className={style.name}>{name}</h3>
                                <small className={style.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.cardBack}>
                    <div className={cn(style.wrap, style.back)}>
                        <img src={bgImg ? bgImg : defCardBg} alt='Сard Backed' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
