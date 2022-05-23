import React from 'react'
import { Navbar } from '../Navbar'
import './index.css'


function NavbarCronograma() {


    return (
        <div>
            <Navbar />
            <div className=' container-fluid navbar-cronograma'>
                <div className='row pt-3 fw-bold '>
                    <div className='col nav-elements' >
                        <a href="/Cursos">Cursos</a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Cronograma">Cronograma</a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/FinalProject">Proyecto final</a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Referencias">Referencias</a>
                    </div>

                </div>
            </div>
        </div>
    )
}


export { NavbarCronograma }