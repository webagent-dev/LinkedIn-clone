import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SuperAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeadOption from './HeadOption'
import BusinessIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from 'react-avatar'

function Header() {
    const avatar = <Avatar size='20px' round={true} name='W-K' className='optionIcon'/>
    return (
        <div className='header__container'>
          <section className='header__wrapper'>
              <div className='first__section'>
                  <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' 
                  alt='' className="logo"/> 
                 <div className='input__container'>
                     <SearchIcon />
                      <input  type='search'  className='header__input' />
                 </div>
              </div>
              <div className='second__section'>
                   <HeadOption Icon={HomeIcon} title='Home'/>
                   <HeadOption  Icon={SuperAccountIcon} title='My Network'/>
                   <HeadOption  Icon={BusinessIcon} title='Jobs'/>
                   <HeadOption  Icon={ChatIcon} title='Messanging'/>
                   <HeadOption  Icon={NotificationIcon } title='Notifications'/>
                   <HeadOption  avatar={avatar} title='Me'/>
              </div>
          </section>
        </div>
    )
}

export default Header
