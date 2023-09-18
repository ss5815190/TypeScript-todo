import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todoListSlice: todoListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;