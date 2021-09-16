import React from 'react'
import style from '../style/rightSide.module.css'
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FcPieChart, FcSportsMode } from "react-icons/fc";
import {  HiOutlineChevronDown } from "react-icons/hi";
import NewItem from './other/NewItem'
import Avatar from 'react-avatar'

function RightSide() {
    return (
        <div className={style.container}>
            <div className={style.first}>
            <div className={style.header}>
                <h2>LinkedIn News</h2>
                <BsFillInfoSquareFill size='9px'/>
            </div>
                <NewItem icon={<FcPieChart size='7px'/>} text='coronavirus: Uk updates' small='top news - 910 reader'/>
                <NewItem icon={<FcPieChart size='7px'/>} text='Heathrow wins battle for third runway' small='13 ago'/>
                <NewItem icon={<FcPieChart size='7px'/>} text="Take elon musk's innovation quiz"small='3d ago- 30,026 readers'/>
                <NewItem icon={<FcPieChart size='7px'/>} text="here's who hiring in the Uk" small='6h ago - 5,540 readers'/>
                <NewItem icon={<FcPieChart size='7px'/>} text='avoiding common resume mistakes' small='3d ago - 10,336 reader'/>
            <div className={style.show__more}>
                    <p>show more</p>
             <HiOutlineChevronDown size='12px'/>
            </div>
            </div>
            <div className={style.second}>
            <div className={style.header}>
                <h2 style={{ fontSize:'12px'}}>Today's most viewed course</h2>
                <BsFillInfoSquareFill size='9px'/>
            </div>
            <NewItem icon='1.' text='the six morning habit...' small='pete mockatis | how to be aweasome at yo...'/>
            <NewItem icon='2.' text='unconscious blas' small='stacey gorden'/>
            <NewItem icon='3.' text='smart thinking:overcom...' small='richard gerver'/>
            <h3>show more on Linkedin Learning</h3>
            </div>
            <div className={style.third}>
                <div className={style.third__header}>

                </div>
        <p>use linkedin ads to separate from the competition</p>
            <div className="third__icon">
                <Avatar size='30px' name='M' className={style.round}/>
                <FcSportsMode size='25px'/>
            </div>
            <h3>start off with $50 in free ad credit</h3>
             <button>request $50 in free credit</button>
            </div>
        </div>
    ) 
}

export default RightSide
