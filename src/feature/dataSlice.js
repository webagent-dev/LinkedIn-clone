import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: null 
}

const dataSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    setPost: (state, action) => {
        state.posts = action.payload
    }
    }
});

export const {
    setPost
} = dataSlice.actions
export const selectPost = state => state.post.posts
export default dataSlice.reducer