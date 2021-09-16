import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userData = action.payload
        },
        logOut: (state, action) => {
            state.userData = null
        }
    }
});

export const {
    logIn,
    logOut
} = authSlice.actions
export const selectLogIn = state => state.auth.userData 
export const selectLogOut = state => state.auth.userData
export default authSlice.reducer