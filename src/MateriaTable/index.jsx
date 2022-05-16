import React from 'react'
import './index.css'
import { Navbar } from '../Navbar'
import {SearchNav} from '../SearchNav'

function MateriaTable() {
    return (
        <div>
            <Navbar />
            <SearchNav />
            <div id='materia-table' className='container'>
                    {/* Table header */}
                    <div className='row header-table pt-2'>
                        <div className='col '>
                            <p>NRC</p>
                        </div>
                        <div className='col'>
                            <p>DEPARTAMENTO</p>
                        </div>
                        <div className='col'>
                            <p>CLAVE</p>
                        </div>
                        <div className='col'>
                            <p>MATERIA</p>
                        </div>
                        <div className='col'>
                            <p>SECCIÓN</p>
                        </div>
                        <div className='col'>
                            <p>DÍAS</p>
                        </div>
                        <div className='col'>
                            <p>HORARIO</p>
                        </div>
                        <div className='col'>
                            <p>ESTADO</p>
                        </div>
                    </div>
                    {/* Table content, all the information here going to be repeated by map or for jsx */}

                    <div className='row content-table'>
                        <div className='col'>
                            <a href="/Materia" >193714</a>
                        </div>
                        <div className='col'>
                            <p>ELECTRÓNICA Y COMPUTACIÓN</p>
                        </div>
                        <div className='col'>
                            <p>IL353</p>
                        </div>
                        <div className='col'>
                            <p>ADMINISTRACIÓN DE PROYECTOS TECNOLÓGICOS</p>
                        </div>
                        <div className='col'>
                            <p>D02</p>
                        </div>
                        <div className='col'>
                            <p>LUNES, MIÉRCOLES</p>
                        </div>
                        <div className='col'>
                            <p>1300-1455</p>
                        </div>
                        <div className='col'>
                            <p>VACÍO</p>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

export { MateriaTable }
