import React from 'react';
import "./index.css"

const PrincipalPageCucei = () => {
    const CuceiImages = require.context('../assets/images', true);
    return (
        <div className=''>
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={CuceiImages('./ImageCucei1.jpg')} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={CuceiImages('./ImageCucei2.jpg')} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={CuceiImages('./ImageCucei3.jpg')} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <div class="overlay">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>Planeación Didáctica CUCEI</h1>
                                <p class="d-none d-md-block">
                                    Esperamos que esta plataforma sea de gran ayuda en la organización en el material de los profesores y aprendizaje de los alumnos.
                                </p>
                                <a href="/usuario" class="btn btn-outline-light" data-toggle="modal">Ver Manual de Ayuda</a>
                                <button type="button" class="btn btn-inicial" data-toggle="modal" data-target="#modalCompra">Ver Planeación</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    );
};

export default PrincipalPageCucei;