import React from 'react'
import {StudentProject} from '../StudentProject';

function FinalProject() {
    const imageAbout = require.context('../assets/images', true);
    return (
        <div>
            <section id="valores" className="text-center">
                <div className="container-xl">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8 mb-3">
                            <h2 className="py-4 ">Proyecto <strong>Final</strong></h2>
                            <p>El proyecto postulado para difusión debe cumplir con  las siguientes especificaciones:
                            </p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="container-xl">
                    <div className="row row-cols-1 row-cols-md-3 ">
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top" src={imageAbout('./book.png')} alt="Creativo" />
                                <div className="card-body">
                                    <h4 className="card-title">El proyecto es original y creativo</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top" src={imageAbout('./book-2.png')} alt="Objetivo" />
                                <div className="card-body">
                                    <h4 className="card-title">Cumple con el objetivo de la materia</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top" src={imageAbout('./book-3.png')}
                                    alt="Tiempo" />
                                <div className="card-body">
                                    <h4 className="card-title">Fue entregado en tiempo y forma</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="featured-students" className="space-between-sections  mt-5 pt-5">
                <div className="container-xl mt-5">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center" style={{ zIndex: "200" }}>
                                Alumnos <strong>Destacados</strong> 
                            </h2>
                            <div className="circule"></div>
                        </div>
                        <div className="col-9">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide pb-5"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="">
                                                    <div
                                                        className=" mx-auto"
                                                        style={{ width: "10rem" }}
                                                    >
                                                        <StudentProject document={1} name={"Isay"} img={"https://img.freepik.com/foto-gratis/mira-captura-recortada-atractivo-joven-apuesto-emocionado-camiseta-azul-que-senala-dedos-arriba-despues-haber-mirado-sorprendido-expresion-alegre-feliz-cara-broadley-sonriendo_176420-10316.jpg?w=2000"} projectName={"Datos en la nube"} cardWidth={"18rem"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="">
                                                    <div
                                                        className=" mx-auto"
                                                        style={{ width: "5rem" }}
                                                    >
                                                        <StudentProject document={2} name={"Carolina"} img={"https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} projectName={"Diseño Frontend"} cardWidth={"18rem"} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="">
                                                    <div
                                                        className=" mx-auto"
                                                        style={{ width: "10rem" }}
                                                    >
                                                        <StudentProject document={3} name={"Leonardo"} img={"https://images.pexels.com/photos/4607198/pexels-photo-4607198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"} projectName={"Desarrollo de Apis"} cardWidth={"18rem"} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <i className="fas fa-angle-left arrow-icon"></i>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <i className="fas fa-angle-right arrow-icon"></i>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- mision vision valores --> */}
        </div>
    )
}

export default FinalProject