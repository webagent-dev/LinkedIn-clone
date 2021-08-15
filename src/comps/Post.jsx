import React from 'react'
import Avatar from 'react-avatar'
import FeedIcon from './feed/FeedIcons'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutLinedIcon from '@material-ui/icons/SendOutlined'

function Post({name, description, message, photoUrl}) {
    return (
        <div className='post__container'>
            <section className='post__wrapper'>
                <Avatar size='50px' round={true} name='WK'/>    
               <div className='post__header'>
                    <h2>{name}</h2>
                <p>{description}</p>
               </div>
            </section>
            <div className='post__body'>
                <p>{message}</p>
            </div>
             <section className='feed__icon__container'>
            <FeedIcon Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <FeedIcon Icon={ ChatOutlinedIcon} title='Comment' color='gray'/>
            <FeedIcon Icon={ShareOutlinedIcon} title='share' color='gray'/>
            <FeedIcon Icon={SendOutLinedIcon} title='send' color='gray'/>
            </section>
        </div>
    )
}

export default Post
