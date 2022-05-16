import React from 'react'
import profesora from '../assets/images/profesora.jpg'
import './index.css'

function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='container-fluid'>
        <ul className='nav-bar_list d-flex justify-content-end '>
          <li>
            <img src={profesora} alt="PerfilPhoto" className='rounded-circle' />
          </li>
          <li>
            <div >
              <button class="btn dropdown-toggle fs-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Josefa Carrillo 
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                {/*<li><a class="dropdown-item" href="#">Perfil</a></li>*/}
                <li id='cerrarSesion'><a class="dropdown-item" href="/">Cerrar sesión</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export {Navbar}
