import React from 'react'
import './App.css'
import LeftSide from './comps/LeftSide'
import Main from './comps/Main'
import RightSide from './comps/RightSide'
import Navbar from './comps/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogIn } from './feature/authSlice'
import Login from './comps/Login'
import Register from './comps/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
    const user = useSelector(selectLogIn)
    return (
       
         
        <div className='container'>
           <Router>
              <Navbar />

           <Switch>
             <Route exact path='/' component={Login}/>
              <Route exact path='/register' component={Register}/>
           <div className="wrapper">
               <Route exact path="/main" component={ LeftSide}/>
              <Route exact path="/main" component={ Main}/>
             <Route exact path="/main" component={RightSide}/>
           </div>
           </Switch>
           </Router>
         
         </div>
        
      
    )
}

export default App
