import React from 'react'
import { Navbar } from '../Navbar'
import {SearchNav} from '../SearchNav'

import './index.css'
function MateriaInfo() {
    return (
        <div>
            <Navbar />
            <SearchNav />
            <div id='materia-info'>
                <div className='container mx-auto'>
                    {/* Table header */}
                    <div className='row header-table-info pt-2'>
                        <div className='col '>
                            <p>Información de la materia</p>
                        </div>
                        <div className='col'>
                            <p className='text-right'>Solo lectura</p>
                        </div>

                    </div>
                    {/* Table content, all the information here going to be repeated by map or for jsx */}

                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>NRC</strong></span><span>: 20440912</span>
                        </div>
                        <div className='col'>
                            <span><strong>Edificio/Aula</strong></span><span>: A/AHF</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>DPT</strong></span><span>: Electronica y comunicaciones</span>
                        </div>
                        <div className='col'>
                            <span><strong>Dias de clase</strong></span><span>: martes</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>Clave</strong></span><span>: asdasdasd</span>
                        </div>
                        <div className='col'>
                            <span><strong>Horario</strong></span><span>: !7:00 - 18:00</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>Seccion</strong></span><span>: CCC</span>
                        </div>
                        <div className='col'>
                            <span><strong>Fecha inicio / Fin</strong></span><span>: 10/03/2022</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            {/*<button className='button-cronograma'>
                                Ver cronograma de actividades
                                </button>*/}
                            <a href="/Moncho" type='button'>Ver cronograma de actividades</a>
                        </div>

                    </div>
                </div>

                {/* booton cronograma */}


            </div>
        </div>
    )
};

export { MateriaInfo }