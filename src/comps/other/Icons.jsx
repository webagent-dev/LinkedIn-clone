import React from 'react'
import style from '../../style/icons.module.css'

function icons({icon, title, text}) {
    return (
        <div className={style.container}>
           <div className={style.icon}>{icon}</div>
            <h3>{text}</h3>
            <p>{title}</p>
        </div>
    )
}

export default icons
