import React from 'react'

function FeedIcons({Icon, title, color}) {
    return (
        <div className='feed__icon'>
            <Icon  style={{color: color, fontSize: '23px'}} />
            <h4>{title}</h4>
        </div>
    )
}

export default FeedIcons
