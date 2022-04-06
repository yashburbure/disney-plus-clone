import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Movies/MovieSlice';
import UserSlice from '../features/User/UserSlice';
export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:UserSlice
  },
});
