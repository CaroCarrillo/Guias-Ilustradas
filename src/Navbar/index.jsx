import React from 'react'
import cuceivector from '../assets/images/cuceivector2.png'
import profesora from '../assets/images/profesora.jpg'
import './index.css'

import { Link} from 'react-router-dom'

function Navbar() {
  
  return (
    <nav className="navbar nav-bar navbar-expand-lg">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          id="brandP">
          <img
            src={cuceivector}
            alt=""
            width="45"
            className="d-inline-block align-text-middle" />
          Planeación Cucei
        </Link>
        <div className="nav-bar_list justify-content-lg-end align-items-center">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
                <img id="profileImg"
                  src={profesora}
                  width="40" className="rounded-circle" alt="" />
            </li>
            <li className="nav-item">
              <div className='dropdown'>
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                  Estefanía Carrillo Torres
                </button>
                <ul id='dropdownPerfilCerrarSesion' class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/Usuario">Perfil</a></li>
                  <li><a class="dropdown-item" href="/">Cerrar sesión</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export {Navbar}
