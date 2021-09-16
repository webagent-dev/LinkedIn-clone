import React from 'react'
import style from '../../style/mainItem.module.css'

function MainItem({icon, title}) {
    return (
        <div className={style.container}>
            <div>{icon}</div>
            <h3>{title}</h3>
        </div>
    )
}

export default MainItem
