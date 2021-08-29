import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  lista: [],
  listaNaoFiltrada: [],
};



export const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    salvarProdutos: (state, action) => {

      const produtos = action.payload;

      state.lista = produtos;

      // state.lista = action.payload;
      // state.listaNaoFiltrada = action.payload;
    },

    filtrarProdutosPorCategoria: (state, action) => {
      const categoriaSelecionada = action.payload;

      const produtosFiltrados = state.listaNaoFiltrada.filter( produto => {
        return produto.categoria === categoriaSelecionada ? true : false;
      });

      state.lista = produtosFiltrados;
    },

  },
});

export const { salvarProdutos, filtrarProdutosPorCategoria } = produtosSlice.actions;

export default produtosSlice.reducer;