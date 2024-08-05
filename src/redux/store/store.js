import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../UserSlice';
import themeReducer from '../ThemeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
