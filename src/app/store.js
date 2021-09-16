import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../feature/authSlice'
import dataSlice from '../feature/dataSlice'
const store = configureStore({
    reducer:{
        auth: authSlice,
        post: dataSlice
    }
})


export default store