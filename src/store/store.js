import { configureStore } from '@reduxjs/toolkit';
import produtosSlice from './slices/produtosSlice';
import categoriasSlice from './slices/categoriasSlice';


export const store = configureStore({
  reducer: {
   produtos:produtosSlice,
   categorias:categoriasSlice,
  },
});
