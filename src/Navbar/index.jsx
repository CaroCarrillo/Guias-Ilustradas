import React from 'react'
import udg from '../assets/images/udg.png'
import './index.css'

function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='container-fluid'>
        <ul className='nav-bar_list pb-4 pt-2 d-flex justify-content-end '>
          <li>
            <img src={udg} alt="PerfilPhoto" />
          </li>
          <li>
            <div >
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Josefa Carrillo 
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                {/*<li><a class="dropdown-item" href="#">Perfil</a></li>*/}
                <li><a class="dropdown-item" href="/#">Cerrar sesión</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export {Navbar}
