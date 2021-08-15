import React from 'react'

function HeadOption({Icon, title, avatar}) {
    return (
        <div className='headOption'>
             {Icon && <Icon  className='optionIcon'/>}  
             {avatar && avatar}
            <h3 className='optionTitle'>{title}</h3>
        </div>
    )
}

export default HeadOption
