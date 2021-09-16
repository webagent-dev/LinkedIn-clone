import React from 'react'
import style from '../style/login.module.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className={style.container}>
          <div className={style.login__wrapper}>
               <div className={style.img}>
                   <img src="https://i.pinimg.com/736x/42/6c/7f/426c7fa7d8ee7dbdd8057652bdc34832.jpg" alt="myLogo" />
                </div> 
                <form>
                    <input type="text" />
                    <input type="text" />
                    <button className="login__btn">LogIn</button>
                </form>
          </div>
        <div className="p" className={style.register}>Not a member?<Link to='register' className={style.color}>Register</Link></div>
        </div>
    )
}

export default Login
