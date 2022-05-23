import React from 'react'
import { Navbar } from '../Navbar'
import {SearchNav} from '../SearchNav'

import './index.css'
function MateriaInfo() {
    return (
        <div>
            <Navbar />
            <SearchNav namePlaneacion={"Materia"} />
            <div id='materia-info'>
                <div className='container mx-auto'>
                    {/* Table header */}
                    <div className='row header-table-info pt-2'>
                        <div className='col '>
                            <p>INFORMACIÓN DE LA MATERIA</p>
                        </div>
                        <div className='col'>
                            <p className='text-right'>SOLO LECTURA</p>
                        </div>

                    </div>
                    {/* Table content, all the information here going to be repeated by map or for jsx */}

                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>NRC</strong></span><span>: 193714</span>
                        </div>
                        <div className='col'>
                            <span><strong>EDIFICIO/AULA</strong></span><span>: DESV2/A040</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>DPT</strong></span><span>: ELECTRÓNICA Y COMUNICACIONES</span>
                        </div>
                        <div className='col'>
                            <span><strong>DÍAS DE CLASE</strong></span><span>: LUNES, MIÉRCOLES</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>CLAVE</strong></span><span>: IL353</span>
                        </div>
                        <div className='col'>
                            <span><strong>HORARIO</strong></span><span>: 1300-1455</span>
                        </div>
                    </div>
                    <div className='row content-table-info'>
                        <div className='col '>
                            <span><strong>SECCIÓN</strong></span><span>: D02</span>
                        </div>
                        <div className='col'>
                            <span><strong>FECHA INICIO/ FIN</strong></span><span>: 17-ENE-22/ 02-JUN-22</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            {/*<button className='button-cronograma'>
                                Ver cronograma de actividades
                                </button>*/}
                            <a href="/Cronograma" type='button'>VER CRONOGRAMA DE ACTIVIDADES</a>
                        </div>

                    </div>
                </div>

                {/* booton cronograma */}


            </div>
        </div>
    )
};

export { MateriaInfo }