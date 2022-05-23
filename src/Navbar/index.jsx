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
          <li className='d-flex justify-content-center align-intems-center'>
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Estefanía Carrillo 
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/Usuario">Perfil</a></li>
                <li id='cerrarSesion'><a class="dropdown-item" href="/">Cerrar sesión</a></li>
              </ul>
            
          </li>
        </ul>
      </div>
    </nav>
  )
}
export {Navbar}
