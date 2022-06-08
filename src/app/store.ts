import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../features/UserRedux/UserSlice';

export const store = configureStore({
  reducer: {
    userStore: UserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
