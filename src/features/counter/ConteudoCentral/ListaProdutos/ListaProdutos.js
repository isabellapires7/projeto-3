import React from 'react';
import { useSelector } from 'react-redux';


const ListaProdutos = () => {

    const produtos = useSelector( (state) => state.produtos.lista );
 


    return <>

        <div id='lista-produtos'>

            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 pt-3">

                { produtos.map( produto => {
                    return <>
                        <div className="col">
                            <div className="card">
                               
                                <div className="card-body">
                                    <h5 className="card-title">
                                        { produto.produto }
                                    </h5>
                                    <p className='card-text'>
                                        { produto.descricao }
                                    </p>
                                </div>
                                <div className="row">

                                    <div className='col-8'>
                                        R$ { produto.preco }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                })}           
                        
                    
                    
             </div>   
        </div>
        
    </>;
       
};

export default ListaProdutos;