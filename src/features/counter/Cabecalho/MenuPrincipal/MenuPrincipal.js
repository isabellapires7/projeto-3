import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtrarProdutosPorCategoria } from '../../../../store/slices/produtosSlice';


const MenuPrincipal = () => {

    const dispatch = useDispatch();

    const categorias = useSelector( (state) => state.categorias.lista );

    return <>

        <div className='container'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    { categorias.map( categorias => <li key={ categorias }>
                                        <a className='dropdown-item'
                                            onClick={ () => { dispatch( filtrarProdutosPorCategoria( categorias ) ) } }>
                                            { categorias }
                                        </a>

                                        </li> ) }
                                </ul>
                            </li>
                            
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Sobremesas</a>
                            </li> */}

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                            <button className="btn btn-outline-Secondary" type="submit">Pesquisar </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

        
        
    </>;
};

export default MenuPrincipal;