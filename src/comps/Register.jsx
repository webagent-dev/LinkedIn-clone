import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/register.module.css'

function Register() {
    return (
        <div className={style.register}>
            <div className={style.wrapper}>
                <h1>Welcome to the network </h1>
                <div className={style.logo}>
                     <img src="" alt="login_logo" />
                </div>
                <form >
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button className={style.register__btn}> Register</button>
                </form>
                <p>Already a member?<Link to='/'>Login</Link></p>
            </div>
           
        </div>
    )
}

export default Register
