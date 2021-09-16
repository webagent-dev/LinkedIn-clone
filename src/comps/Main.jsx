import React from 'react'
import style from '../style/main.module.css'
import { FaEdit } from 'react-icons/fa'
import MainItem from './other/MainItem'
import { FcPicture, FcFilm, FcKindle, FcPlanner, FcOk} from "react-icons/fc";
import { AiOutlineEllipsis,AiOutlineMessage, AiOutlineSend, AiOutlineShareAlt} from "react-icons/ai";
import  { GoThumbsup, GoGitMerge } from "react-icons/go";
import Avatar from 'react-avatar'
import Item from './other/Item';

function Main() {
    return (
        <div className={style.container}>
            <div className={style.header__wrapper}>
            <div className={style.header}>
                <FaEdit  style={{color: 'gray'}}/>
                <input type='text' placeholder='Start a post'/>
         </div>
             <div className={style.icon__warpper}>
                <MainItem icon={<FcPicture size='20px'/>} title='Photo'/>
                <MainItem icon={<FcFilm size='20px'/>} title='Video'/>
                <MainItem icon={<FcPlanner size='20px'/>} title='Event'/>
                <MainItem icon={<FcKindle size='20px'/>} title='Write article'/>
            </div>
            </div>
            <div className={style.post}>
                <div className={style.user}>
                    <div className={style.first__part}>
                        <Avatar size='35px' name='W' className={style.avatar}/>
                        <div className={style.insider}>
                            <h2>wiz kenny</h2>
                            <p>vsvvvsgdsuudfgu</p>
                            <small >1h- <FcOk size='7px'/></small>
                        </div>
                    </div>
                    <div className={style.second__part}>
                        <AiOutlineEllipsis />
                    </div>
                </div>
                <div className={style.chat}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio quae deserunt ipsa accusamus. Perferendis eius consequatur porro maxime animi adipisci officiis, deserunt temporibus molestiae non, est esse eaque fugiat.</p>
                    <small className={style.see__more}>...see more</small>
                    <div className={style.likes}> <GoThumbsup size='8px'/> 7</div>
                </div>
                <div className={style.other}>
                    <Item text="I'm curious..."/>
                    <Item text="This will help..."/>
                    <Item text="Love this..."/>
                    <Item text=" Thanks for ...."/>
                    
                    
                </div>
                <div className={style.post__icon__wrapper}>
                    <MainItem icon={< GoThumbsup size='20px'/>} title='Like'/>
                    <MainItem icon={< AiOutlineMessage size='20px'/>} title='Comment'/>
                    <MainItem icon={< AiOutlineShareAlt size='20px'/>} title='Share'/>
                    <MainItem icon={< AiOutlineSend size='20px'/>} title='Send'/>
                </div>
            </div>
        </div>
    )
}

export default Main
