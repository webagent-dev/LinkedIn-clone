
import React from 'react'
import style from '../style/leftSide.module.css'
import Avatar from 'react-avatar'
import { FcNeutralDecision } from "react-icons/fc";
import { HiBookmark,HiOutlineUserGroup, HiPlus, HiOutlineChevronDown } from "react-icons/hi";
import RecentItem from './other/RecentItem'

function leftSide() {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <img src='' alt='profile__pic'/>
                <Avatar size='40px' Round='true' name='Me'className={style.profile__image}/>
                <h2>wiz kenny</h2>
                <p className={style.tag}>web-design <span> / </span>web-development & <span> CEO</span>of webdev-agent</p>
                <div className={style.detail__wrapper}>
                <div className={style.details}>
                <h3>who viewed your profile</h3>
                <p>2,3455</p>
                </div>
                
                <div className={style.details}>
                <h3>views your post</h3>
                <p>2,3455</p>
                </div>
                </div>
                <div className={style.other}>
                    <div className={style.other__detail}>
                        <p>access exclusive tools & insights</p>
                        <div className={style.other__wrapper}>
                        <FcNeutralDecision  className={style.icon}/>
                            <h3>retry premium free</h3>
                        </div>
                        <div className={style.other__wrapper}>
                        <HiBookmark  className={style.icon}/>
                            <h3>my items</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.recent}>
                <h3>recent</h3>
                <RecentItem  icon={'#'} recent='reactjs'/>
                <RecentItem icon={'#'} recent='programming'/>
                <RecentItem icon={'#'} recent='softwaredesign'/>
                <RecentItem icon={'#'} recent='softwareengineering'/>
                <RecentItem icon={'#'} recent='agilesoftwaredevelopment'/>
                <div className="group">
                    <p style={{color: 'skyblue'}}>groups</p>
                 <RecentItem icon={<HiOutlineUserGroup size='12px'/>}recent='VC-Venture Capitalist, F...'/>
                </div>
                <p style={{color: 'gray', fontSize: '8px', padding: '0px 30px', marginBottom: '10px'}}>see all</p>
                <div className="group">
                <div className={style.details}>
                    <p>event</p>
                    <HiPlus />
                </div>
                <p style={{color: 'skyblue'}}>followed hashtags</p> 
                <RecentItem  icon={'#'} recent='reactjs'/>
                <RecentItem icon={'#'} recent='programming'/>
                <RecentItem icon={'#'} recent='softwaredesign'/>
                </div>
                <div className={style.show__more}>
                    <p>show more</p>
                    <HiOutlineChevronDown />
                </div>
            </div>
            <div className={style.more}>
                <p>Discover more</p>
            </div>
        </div>
    )
}

export default leftSide
