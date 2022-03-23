import React from 'react'
import './index.css'
function DropdownProfile() {
  return (
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle dropDownOptions shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Josefa Estefania Carrillo Torres
          </button>
          <ul class="dropdown-menu  ms-5 end-0 text-end" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Mi perfil</a></li>
              <li><a class="dropdown-item" href="#">Cerrar sesion</a></li>
          </ul>
      </div>
  )
}

export {DropdownProfile}
