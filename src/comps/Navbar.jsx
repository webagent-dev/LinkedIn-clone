import React from 'react'
import style from '../style/navbar.module.css'
import { MdSearch, } from 'react-icons/md'
import { ImHome3 } from 'react-icons/im'
import Icons from './other/Icons'
import Avatar from 'react-avatar'
 import { BsGrid3X3Gap, BsPeopleFill, BsBriefcaseFill,BsFillChatDotsFill,BsFillBellFill } from "react-icons/bs";

function Navbar() {
    return (
        <div className={style.container}>
              <div className={style.wrapper}>
                  <div className={style.first}>
                      <img src='https://dwglogo.com/wp-content/uploads/2020/06/Linkedin_symbol_transparent.png' alt='photo_url'/>
                    <div className={style.search__input}>
                        <MdSearch  className={style.search__icon}/>
                        <input type="text" placeholder='Search'/>
                    </div>
                  </div>
                  <div className={style.second}>
                 <Icons icon={<ImHome3 /> } title='Home'/>
                 <Icons icon={<BsPeopleFill /> } title='my network'/>
                 <Icons icon={<BsBriefcaseFill /> } title='jobs'/>
                 <Icons icon={<BsFillChatDotsFill /> } title='messaging'/>
                 <Icons icon={<BsFillBellFill /> } title='notifications'/>
                 {/* <Icons icon={<ImHome3 /> } title='Home'/> */}
                 <Icons icon={<Avatar size='20px' name='Me' className={style.avater}/> } title='Me' rounded='true'/>
                 <Icons icon={<BsGrid3X3Gap /> } title='Work'/>
                 <Icons text='Retry Premium' title='Free'/>

                  </div>
              </div>
        </div>
    )
}

export default Navbar
