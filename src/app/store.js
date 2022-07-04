import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counterReducerNew from '../features/counter/counterSliceNew';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterNew: counterReducerNew
  },
});
