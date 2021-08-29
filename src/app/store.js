import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counter/counterSlice';
import produtosReducer from '../store/slices/produtosSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    produtos: produtosReducer,
  },
});
