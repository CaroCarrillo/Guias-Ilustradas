import React from 'react'
import './index.css'

function MateriaTable() {
  return (
      <div id='materia-table'>
          <div className='container mx-auto'>
              {/* Table header */}
              <div className='row header-table pt-2'>
                  <div className='col '>
                      <p>NRCs</p>
                  </div>
                  <div className='col'>
                      <p>Departamento</p>
                  </div>
                  <div className='col'>
                      <p>Clave</p>
                  </div>
                  <div className='col'>
                      <p>Materia</p>
                  </div>
                  <div className='col'>
                      <p>Sección</p>
                  </div>
                  <div className='col'>
                      <p>Días</p>
                  </div>
                  <div className='col'>
                      <p>Horario</p>
                  </div>
                  <div className='col'>
                      <p>Estatus</p>
                  </div>
              </div>
              {/* Table content, all the information here going to be repeated by map or for jsx */}

              <div className='row content-table'>
                  <div className='col '>
                      <a href="">234234234</a>
                  </div>
                  <div className='col'>
                      <p>Electronica y computacion</p>
                  </div>
                  <div className='col'>
                      <p>43sd</p>
                  </div>
                  <div className='col'>
                      <p>Bioimagenes</p>
                  </div>
                  <div className='col'>
                      <p>Nan</p>
                  </div>
                  <div className='col'>
                      <p>Martes, jueves</p>
                  </div>
                  <div className='col'>
                      <p>3pm</p>
                  </div>
                  <div className='col'>
                      <p>activo</p>
                  </div>
              </div>
          </div>

      </div>
  )
}

export {MateriaTable}
