import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  lista: [],
};


export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    salvarCategorias: (state, action) => {
    //   state.lista = action.payload;

    const _produtos = action.payload
    const _categorias = [];

    for( let i = 0; i < _produtos.length; i = i++ ) {
        const produto = _produtos[i];
        const categoria = produto.categoria;

        if( !_categorias.includes( categoria ) ) {
            _categorias.push( categoria );
        }

    }

    state.lista = _categorias;

    },
  },
});

export const { salvarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;