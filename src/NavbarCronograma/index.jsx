import React from 'react'
import { Navbar } from '../Navbar'
import './index.css'


function NavbarCronograma() {


    return (
        <div>
            <Navbar />
            <div className=' container-fluid navbar-cronograma'>
                <div className='row pt-3 fw-bold'>
                    <div className='col nav-elements'>
                        <a href="/Cursos">CURSOS</a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Cronograma">CRONOGRAMA</a>
                    </div>
                    <div className='col nav-elements'>
                        <div class="dropdown ">
                            <button className="btn dropdown-toggle fw-bold text-white fs-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                UNIDADES
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="/Unidad">Unidad 1</a></li>
                                <li><a class="dropdown-item" href="/#">Unidad 2</a></li>
                                <li><a class="dropdown-item" href="/#">Unidad 3</a></li>
                                <li><a class="dropdown-item" href="/#">Unidad 4</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/FinalProject">PROYECTO FINAL</a>
                    </div>
                    <div className='col nav-elements'>
                        <a href="/Referencias">REFERENCIAS</a>
                    </div>

                </div>
            </div>
        </div>
    )
}


export { NavbarCronograma }