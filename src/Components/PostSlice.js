import { createSlice } from '@reduxjs/toolkit'

const PostSlice = createSlice({
    name:'posts',
    initialState:[],
    reducers:{
        valid:(state,action)=>{
            const newPost={
                id:Date.now(),
                username:action.payload.username,
                email:action.payload.email,
                name:action.payload.name,
                language:action.payload.language,
                seats:action.payload.seats,
                datetime:action.payload.datetime
            }
            state.push(newPost);
        },
        updatePost:(state,action)=>{
            const book=state.find((book)=>book.id===action.payload.id);
            if(book){
                book.username=action.payload.username;
                book.email=action.payload.email;
                book.name=action.payload.name;
                book.language=action.payload.language
                book.seats=action.payload.seats;
                book.datetime=action.payload.datetime;
            }
        },
        deletePost:(state,action)=>{
            return state.filter((book)=>book.id!==action.payload.id)
        },
    }

})

export const {valid,updatePost,deletePost}=PostSlice.actions;
export default PostSlice.reducer;
