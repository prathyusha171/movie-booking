import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Components/PostSlice'

const store=configureStore({
  reducer:{
    posts:postReducer,
  },

})

export default store;