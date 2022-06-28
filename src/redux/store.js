import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './modules/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
