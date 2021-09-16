import React from 'react'
import style from '../../style/recentItem.module.css'

function RecentItem({recent, icon}) {
    return (
        <div className={style.recent__item}>
            <span>{icon}</span>
            <p>{recent}</p>
        </div>
    )
}

export default RecentItem
