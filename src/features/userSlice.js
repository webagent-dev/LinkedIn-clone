import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload
        },
        logUserOut: (state, action) => {
            state.userData = null
        }
    }
});

export const {
    setUser, logUserOut

} = userSlice.actions
export const user = state => state.user.userData
export default userSlice.reducer