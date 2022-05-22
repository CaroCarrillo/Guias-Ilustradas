import React from 'react'
import { NavbarCronograma } from '../NavbarCronograma'
import './index.css'
import { useLocation } from 'react-router-dom'


function Unidad() {
    const location = useLocation()
    const props  = location.state
    return (
        <div>
            <NavbarCronograma />
                <div class="centered-card d-flex justify-content-center align-items-center mt-5">
                    <div class="container p-2 mt-5">
                        <h5 class="card-title">{props.unidad}</h5>
                        <h6 class="card-subtitle text-muted">{props.subtitle}</h6>
                        <p class="card-text">{props.text}</p>

                        <div class="d-grid gap-2 d-md-block col-4 mx-auto mt-5">
                            <button class="btn btn-secondary me-3" type="button">Material didactico</button>
                            <button class="btn btn-secondary" type="button">Genera reporte</button>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

export { Unidad }
