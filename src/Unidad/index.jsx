import React from 'react'
import { NavarCronograma } from '../NavarCronograma'
import './index.css'

function Unidad() {
  return (
      <div>
          <NavarCronograma />
          <div className='container unidad-text-container'>
              <div class="card centered-card">
                  <div class="card-body">
                      <h5 class="card-title">Unidad 1 : Desarrollo de HTML</h5>
                      <h6 class="card-subtitle mb-2 text-muted">DIVEC</h6>
                      <p class="card-text">El origen de HTML se remonta a 1980, cuando el físico Tim Berners-Lee, trabajador del CERN (Organización Europea para la Investigación Nuclear) propuso un nuevo sistema de "hipertexto" para compartir documentos.

                          Los sistemas de "hipertexto" habían sido desarrollados años antes. En el ámbito de la informática, el "hipertexto" permitía que los usuarios accedieran a la información relacionada con los documentos electrónicos que estaban visualizando. De cierta manera, los primitivos sistemas de "hipertexto" podrían asimilarse a los enlaces de las páginas web actuales.

                          Tras finalizar el desarrollo de su sistema de "hipertexto", Tim Berners-Lee lo presentó a una convocatoria organizada para desarrollar un sistema de "hipertexto" para Internet. Después de unir sus fuerzas con el ingeniero de sistemas Robert Cailliau, presentaron la propuesta ganadora llamada WorldWideWeb (W3). </p>

                      <div class="d-grid gap-2 d-md-block col-8 mx-auto">
                          <button class="btn btn-primary me-3 px-5" type="button">Material didactico</button>
                          <button class="btn btn-primary px-5" type="button">Genera reporte</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export {Unidad}
