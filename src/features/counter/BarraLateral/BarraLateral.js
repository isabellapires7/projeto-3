import React from 'react';

const BarraLateral = () => {
    return <>
       <aside>

           <div className="accordion pt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Sabores
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type='checkbox' name='sabores' value='semGluetem' />Chocolate
                                </li>
                                <li className="list-group-item">
                                    <input type='checkbox' name='sabores' value='semLactose' />Frutas
                                </li>
                                <li className="list-group-item">
                                    <input type='checkbox' name='sabores' value='semAcucar' />Baunilha
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Opções
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type='checkbox' name='opcoes' value='semGluetem' />Sem Glútem
                                </li>
                                <li className="list-group-item">
                                    <input type='checkbox' name='opcoes' value='semLactose' />Sem Lactose 
                                </li>
                                <li className="list-group-item">
                                    <input type='checkbox' name='opcoes' value='semAcucar' />Sem Açúcar 
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </div>
    
            </div>
       </aside>
        
    </>;
};

export default BarraLateral;