
import React, { useState, useEffect } from 'react'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EverNoteIcon from '@material-ui/icons/EventNote'
import CalenderViewDay from '@material-ui/icons/CalendarViewDay'
import CreateIcon from '@material-ui/icons/Create'
import FeedIcons from './FeedIcons'

import Post  from '../Post'
import { firestore as db } from  '../../firebase.js'
import firebase  from  '../../firebase.js'

function Feed() {
    const [post, setPost] = useState('')
    const [input, setInput ] = useState('')
     const handleSubmit = e => {
        e.preventDefault()
        db.collection('post')
        .add({
            name: 'wiz kenny',
            description: 'here we are oo',
            message: input,
            photoUrl: '',
        })
        setInput('')
    }

    useEffect(()  => {
        db.collection('post')
        .onSnapshot((snapShot) => setPost(
            snapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
    },[])

    return (
        <div className='feed__container'>
            <section className='feed__wrapper'>
            <div className='form__wrapper'>
                <CreateIcon   className='write'/>
                <form onSubmit={handleSubmit}>
                <input  type='text' autoFocus className='input' value={input} onChange={(e) => setInput(e.target.value)}/>
                </form>
            </div>
            <section className='feed__icon__container'>
            <FeedIcons Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <FeedIcons Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <FeedIcons Icon={EverNoteIcon} title='Event' color='#C0CBCD'/>
            <FeedIcons Icon={CalenderViewDay} title='Write article' color='#7FC15E'/>
            </section>
            </section>
            <div className='post__parent'>
              {
                 post &&  post.map(({id, data: {name, description, message, photoUrl}}) => 

                       <Post name={name} description={description} message={message} key={id}/>
                  )
              }
            </div>
        </div>
    )
}

export default Feed
