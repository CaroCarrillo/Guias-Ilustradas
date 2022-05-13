import React from 'react'
import './index.css'


function NavarCronograma() {
  return (
    <div>
        
        <div className=' container-fluid navbar-cronograma'>
              <div className='row pt-2 '>
                  <div className='col nav-elements'>
                  <a href="/Cursos">Cursos</a>
                  </div>
                  <div className='col nav-elements'>
                      <a href="">Cronograma</a>
                  </div>
                  <div className='col nav-elements'>
                      <div class="dropdown ">
                          <button class="btn btn-secondary dropdown-toggle unidades " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Unidades
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item" href="#">Unidad 1</a></li>
                              <li><a class="dropdown-item" href="#">Unidad 2</a></li>
                              <li><a class="dropdown-item" href="#">Unidad 3</a></li>
                              <li><a class="dropdown-item" href="#">Unidad 4</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className='col nav-elements'>
                  <a href="">Proyecto Final</a>
                  </div>
                  <div className='col nav-elements'>
                    <a href="">Referencias</a>
                  </div>

              </div>
          </div>
    </div>
  )
}


export {NavarCronograma}