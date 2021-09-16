import React from 'react'
import style from '../../style/newItem.module.css'

function NewItem({icon, text,small}) {
    return (
        <div className={style.news}>
           <div className={style.new__wrapper}>
             <div className="icon" style={{fontFamily: 'monospace',textAlign: 'center'}}>{icon}</div>
                <p>{text}</p>
           </div>
           <small>{small}</small>
        </div>
    )
}

export default NewItem
