import React from 'react'
import './App.css'
import Header from './comps/header/Header'
import Sidebar from './comps/sidebar/SideBar'
import Feed from './comps/feed/Feed'
import LoginPage from './comps/LoginPage'
import { user } from './features/userSlice'
import { useSelector } from 'react-redux'

function App() {
    const userLogin = useSelector(user)
    return (
        <div className='container'>
             <Header />
          { !userLogin ? <LoginPage />
          : 
          <>
            <div className='app__wrapper'>
            <Sidebar />
         <Feed />
         </div>
         </>
          }
        </div>
    )
}

export default App
