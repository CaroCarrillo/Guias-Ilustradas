import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarCronograma } from '../NavbarCronograma'
import './index.css';


function Cronograma() {
    let cursos = [
        {
            "titleUnidad":"Historia: tecnologia de la informacion",
            "Unidad": [
                {
                    "subtema": "informatica bbghbbbbhuhbuhbhbbbhbubbbbujhbbnhuhjhuujhbhbujjuhb",
                    "texto": " La informática, también llamada computación, es el área de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital.",
                    "semana": 1
                },
                {
                    "subtema": "Algoritmo",
                    "texto": " El texto va aqui",
                    "semana": 1
                },
                {
                    "subtema": "Bit",
                    "texto": " El texto va aqui",
                    "semana": 2
                },
                {
                    "subtema": "Logica",
                    "texto": " El texto va aqui",
                    "semana": 2
                }
            ]
        },
        {
            "titleUnidad":"titulo2",
            "Unidad": [
                {
                    "subtema": "informatica bbghbbbbhuhbuhbhbbbhbubbbbujhbbnhuhjhuujhbhbujjuhb",
                    "texto": " La informática, también llamada computación, es el área de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital.",
                    "semana": 1
                },
                {
                    "subtema": "Algoritmo",
                    "texto": " El texto va aqui",
                    "semana": 1
                },
                {
                    "subtema": "Bit",
                    "texto": " El texto va aqui",
                    "semana": 2
                },
                {
                    "subtema": "Logica",
                    "texto": " El texto va aqui",
                    "semana": 2
                }
            ]
        }
    ]

    function returnColumn(semanas) {
        var rows = [];
        for (var i = 1; i < 18; i++) {
            if (i === semanas) {
                rows.push(<td key={i}> ✓ </td>);
            }else {
                rows.push(<td key={i}> </td>);
            }
        }
        return rows;
    }

    function linkedData(informationJson,indexUnidad){
        let row = []
        for (let indexSubtema = 0; indexSubtema < informationJson[indexUnidad].Unidad.length; indexSubtema++){
            row.push(
            <tr>
                <th>
                    <Link
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={informationJson[indexUnidad].Unidad[indexSubtema].subtema}
                        to="/Unidad"
                        state={{
                            unidad: informationJson[indexUnidad].titleUnidad,
                            subtitle: informationJson[indexUnidad].Unidad[indexSubtema].subtema,
                            text: informationJson[indexUnidad].Unidad[indexSubtema].texto
                        }}
                    >{informationJson[indexUnidad].Unidad[indexSubtema].subtema}
                    </Link>
                </th>
                { 
                returnColumn(informationJson[indexUnidad].Unidad[indexSubtema].semana)
                }
            </tr>)
        }
        return row
    }

    function createTable(informationJson){
        let row = []
        for (let indexUnidad = 0; indexUnidad < informationJson.length;indexUnidad ++){
            row.push(
            <tr>
                {/*Fila de Unidad*/}
                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">{informationJson[indexUnidad].titleUnidad}</th>
            </tr>,
            linkedData(informationJson, indexUnidad)
            )
        }
        return row
    }

    return (
        <div >
            <NavbarCronograma/>
            <div className='d-flex justify-content-center align-items-center mt-5' id='Cronograma' >
            <div className='container border border-2 rounded-3 p-2 mt-5'  >
                <table class="table table-hover">
                    <thead>
                        <tr>
                            {/*Fila de semana 1 - 17 */}
                            <th scope="col" style={{ color: "#0C345C" }} className='fs-4' >Semanas</th>
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                            <th scope="col">8</th>
                            <th scope="col">9</th>
                            <th scope="col">10</th>
                            <th scope="col">11</th>
                            <th scope="col">12</th>
                            <th scope="col">13</th>
                            <th scope="col">14</th>
                            <th scope="col">15</th>
                            <th scope="col">16</th>
                            <th scope="col">17</th>
                        </tr>
                    </thead>
                        <tbody>
                            {createTable(cursos)}
                            {/************************************************* UNIDAD 1 ************************************************************
                            {/* <tr>
                                {/*Fila de Unidad 1 - Historia: Tecnologías de la información 
                                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">Unidad 1 - Historia: Tecnologías de la información</th>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.1 - Informática 
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.1 - Informática"
                                        to="/Unidad"
                                        state={{
                                            title: "Unidad 1 - Historia: Tecnologías de la información",
                                            subtitle: "Tema 1.1 Informática",
                                            text: "La informática, también llamada computación, es el área de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital."
                                        }}
                                        >Tema 1.1 - Informática
                                    </Link>
                                </th>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.2 - Algoritmo *
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.2 - Algoritmo"
                                        to="/Unidad"
                                        state={{ 
                                            title: "Unidad 1 - Historia: Tecnologías de la información", 
                                            subtitle: "Tema 1.1 Algoritmo", 
                                            text: " " }}
                                        >Tema 1.2 - Algoritmo
                                    </Link>
                                </th>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.3 - Bit 
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.3 - Bit"
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.3 - Bit", text: " " }}
                                    >Tema 1.3 - Bit</Link></th>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.4 - Lógica y conjuntos 
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.4 - Lógica y conjuntos"
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.4 - Lógica y conjuntos", text: " " }}
                                    >Tema 1.4 - Lógica y conjuntos</Link></th>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.5 - Código binario y su almacenamiento (Bytes) 
                                <th style={{ color: "gray" }} scope="row"><Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.5 - Código binario y su almacenamiento (Bytes) "
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.5 - Código binario y su almacenamiento (Bytes) ", text: " " }}
                                    >Tema 1.5 - Código binario y su almacenamiento (Bytes) </Link></th>
                                
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.6 - Representación de lenguaje de alto nivel carácter (ASCII)
                                <th style={{ color: "gray" }} scope="row"><Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.6 - Representación de lenguaje de alto nivel carácter (ASCII)"
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.6 - Representación de lenguaje de alto nivel carácter (ASCII)", text: " " }}
                                    >Tema 1.6 - Representación de lenguaje de alto nivel carácter (ASCII)</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.7 - Arquitectura hardware 
                                <th style={{ color: "gray" }} scope="row"><Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.7 - Arquitectura hardware"
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.7 - Arquitectura hardware", text: " " }}
                                    >Tema 1.7 - Arquitectura hardware</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************
                            <tr>
                                {/*Fila de Tema 1.8 - Software *
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 1.8 - Software"
                                        to="/Unidad"
                                        state={{ title: "Unidad 1 - Historia: Tecnologías de la información", subtitle: "Tema 1.8 - Software", text: " " }}
                                    >Tema 1.8 - Software</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr> */}
                            {/***************************************************** UNIDAD 2 *******************************************************/}
                            <tr>
                                {/*Fila de Unidad 2 - Industria X.0 */}
                                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">Unidad 2 - Industria X.0</th>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 2.1 - Los sistemas del sistema empresa ERPs */}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 2.1 - Los sistemas del sistema empresa ERPs"
                                        to="/Unidad"
                                        state={{ title: "Unidad 2 - Industria X.0", subtitle: "Tema 2.1 - Los sistemas del sistema empresa ERPs", text:"" }}
                                    >Tema 2.1 - Los sistemas del sistema empresa ERPs</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 2.2 - Interfaz hombre-máquina */}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 2.2 - Interfaz hombre-máquina"
                                        to="/Unidad"
                                        state={{ title: "Unidad 2 - Industria X.0", subtitle: "Tema 2.2 - Interfaz hombre-máquina", text:"" }}
                                    >Tema 2.2 - Interfaz hombre-máquina</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/***************************************************** UNIDAD 3 *******************************************************/}
                            <tr>
                                {/*Fila de Unidad 3 - Gestión de proyectos TI*/}
                                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">Unidad 3 - Gestión de proyectos TI</th>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.1 - Introducción metodología PMI*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.1 - Introducción metodología PMI"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.1 - Introducción metodología PMI", text:"" }}
                                    >Tema 3.1 - Introducción metodología PMI</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.2 - Origenes de la administración de proyectos*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.2 - Origenes de la administración de proyectos"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.2 - Origenes de la administración de proyectos", text:"" }}
                                    >Tema 3.2 - Origenes de la administración de proyectos</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.3 - Complejidad de los proyectos de IT*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.3 - Complejidad de los proyectos de IT"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.3 - Complejidad de los proyectos de IT", text:"" }}
                                    >Tema 3.3 - Complejidad de los proyectos de IT</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.4 - Metodologías*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.4 - Metodologías"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.4 - Metodologías", text:"" }}
                                    >Tema 3.4 - Metodologías</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.5 - Restricciones*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.5 - Restricciones"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.5 - Restricciones", text:"" }}
                                    >Tema 3.5 - Restricciones</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.6 - Análisis de sistemas*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.6 - Análisis de sistemas
                                        "
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.6 - Análisis de sistemas", text:"" }}
                                    >Tema 3.6 - Análisis de sistemas</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.7 - Life Cycle*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.7 - Life Cycle"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.7 - Life Cycle", text:"" }}
                                    >Tema 3.7 - Life Cycle</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 3.8 - Control de cambios*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 3.8 - Control de cambios"
                                        to="/Unidad"
                                        state={{ title: "Unidad 3 - Gestión de proyectos TI", subtitle: "Tema 3.8 - Control de cambios", text:"" }}
                                    >Tema 3.8 - Control de cambios</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/***************************************************** UNIDAD 4 *******************************************************/}
                            <tr>
                                {/*Fila de Unidad 4 - Internet de las cosas*/}
                                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">Unidad 4 - Internet de las cosas</th>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 4.1 - Introducción del internet de las cosas industrial (IoT)*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="TTema 4.1 - Introducción del internet de las cosas industrial (IoT)"
                                        to="/Unidad"
                                        state={{ title: "Unidad 4 - Internet de las cosas", subtitle: "Tema 4.1 - Introducción del internet de las cosas industrial (IoT)", text:"" }}
                                    >Tema 4.1 - Introducción del internet de las cosas industrial (IoT)</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 4.2 - Desarrollo e implementación de soluciones para IoT*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 4.2 - Desarrollo e implementación de soluciones para IoT"
                                        to="/Unidad"
                                        state={{ title: "Unidad 4 - Internet de las cosas", subtitle: "Tema 4.2 - Desarrollo e implementación de soluciones para IoT", text:"" }}
                                    >Tema 4.2 - Desarrollo e implementación de soluciones para IoT</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                <td> </td>
                            </tr>
                            {/*************************************************************************************************************/}
                            <tr>
                                {/*Fila de Tema 4.3 - Introducción, gestión y almacenamiento de información generada por IoT*/}
                                <th style={{ color: "gray" }} scope="row">
                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Tema 4.3 - Introducción, gestión y almacenamiento de información generada por IoT"
                                        to="/Unidad"
                                        state={{ title: "Unidad 4 - Internet de las cosas", subtitle: "Tema 4.3 - Introducción, gestión y almacenamiento de información generada por IoT", text:"" }}
                                    >Tema 4.3 - Introducción, gestión y almacenamiento de información generada por IoT</Link></th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> ✓ </td>
                                
                            </tr>
                            {/*************************************************************************************************************/}
                        </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export { Cronograma }