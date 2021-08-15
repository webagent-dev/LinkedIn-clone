import React from 'react'
import Avatar from 'react-avatar'

function SideBar() {
    const recent = (text) => <p>#  {text}</p>
    return (
        <div className='sidebar__container'>
           <section className='profile__wrapper'> 
           <div className='profile'>
              <img src='https://as1.ftcdn.net/v2/jpg/01/83/50/96/500_F_183509631_BUCZzhQ7CdFKWGbuIizHfQN2bvMSSIKT.jpg' alt='broser__image' className='profile__image'/>
              <Avatar size='45px' round={true} name='WK' className='profile__avatar'/>
        <h2>Wiz kenny</h2>
        <h4>wizkenny1996@gmail.com</h4>
        </div>
        <div className='view'>
            <div className='view__detail'>
                <p>Who viewed you</p>
                <span>2, 543</span>
            </div>
                <div className='view__detail'>
                    <p>Views on post </p>
                    <span>2,456</span>
                </div>
        </div>
        </section> 
        <section className='details'>
            <h3>Recent</h3>
           <p>{recent && recent('reactjs')}</p> 
           <p>{recent && recent('programming')}</p> 
           <p>{recent && recent('softwareengineering')}</p> 
           <p>{recent && recent('design')}</p> 
           <p>{recent && recent('developer')}</p> 
        </section> 
        </div>
    )
}

export default SideBar
