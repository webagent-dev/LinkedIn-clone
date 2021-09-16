import React from 'react'
import style from '../../style/item.module.css'

function Item({text}) {
    return (
        <div className={style.item}>
            {text}
        </div>
    )
}

export default Item
