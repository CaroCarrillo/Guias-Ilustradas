import React from 'react'
import { Navbar } from '../Navbar'
import './index.css'


function NavbarCronograma() {


    return (
        <div>
            <Navbar />
            <div className=' container-fluid navbar-cronograma'>
                <div className='row pt-3 '>
                    <div className='col nav-elements' >
                        <a href="/Cursos">Cursos de <strong>Carrera</strong></a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Cronograma">Cronograma de <strong>Materia</strong></a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/FinalProject">Proyecto <strong>Final</strong></a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Referencias">Referencias de <strong>Materia</strong></a>
                    </div>

                </div>
            </div>
        </div>
    )
}


export { NavbarCronograma }