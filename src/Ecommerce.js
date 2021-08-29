import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cabecalho from './features/counter/Cabecalho/Cabecalho';
import Rodape from './features/counter/Rodape/Rodape';
import BarraLateral
 from './features/counter/BarraLateral/BarraLateral';
import ConteudoCentral from './features/counter/ConteudoCentral/ConteudoCentral';
import axios from './axios/axios';
import { salvarProdutos } from './store/slices/produtosSlice';
import { salvarCategorias } from './store/slices/categoriasSlice';


const Ecommerce = () => {

    const dispatch = useDispatch();

    useEffect( async () => {

        try {
            const resultado = await axios.get('cardapio');
        
            dispatch( salvarProdutos(resultado.data)); 
            // dispatch( salvarCategorias(resultado.data));   
        }   catch (e) {
            alert('Houve algum erro na chamada Ajax');
        }
    }, [] );

    return <>

        <Cabecalho />

        <div className="container">
            <div className="row">
                <div className="col-2">
                    <BarraLateral />
                </div>

                <div className="col-10">
                    <ConteudoCentral />
                </div>
            </div>
        </div>


        <Rodape />
    </>;
};

export default Ecommerce;