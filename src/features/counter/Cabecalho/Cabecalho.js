import React from 'react';
import { useSelector } from 'react-redux';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal';

const Cabecalho = () => {

    const style = {
        'span':{
            fontWeight: 'bold'
        }
    };

    return <>

        <header>

            <div className="container p-3">

                <div className="row">
                    <div className="col-12 col-sm-8 col-md-10">
                        < img 
                        src='/imagens/cake-slice.png'
                        alt='Logo'
                        title='Logo Doces da Bella' />
                    </div>

                    <div className="col-12 col-sm-4 col-md-2">
                        <div>Seja bem vinda, <span style={style.span}>Bella</span>. </div>
                        <div>Favoritos (7)</div>
                        <div><i className="fas fa-user"></i>Logout</div>
                    </div>

                </div>
                
            </div>

            <MenuPrincipal />

        </header>
        
    </>;
};

export default Cabecalho;