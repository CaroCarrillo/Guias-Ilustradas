import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarCronograma } from '../NavbarCronograma'
import './index.css';


function Cronograma() {
    let cursos = [
        {
            "titleUnidad":"Unidad 1 - Historia: tecnologías de la información",
            "Unidad": [
                {
                    "subtema": " 1.1 Informática",
                    "texto": "La informática, también llamada computación, es el área de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital.",
                    "semana": 1
                },
                {
                    "subtema": " 1.2 Algoritmo",
                    "texto": "Un algoritmo es un conjunto de reglas definidas que permite solucionar un problema, de una determinada manera, mediante operaciones sitemáticas (no necesariamente ordenadas) y finitas. Estas instrucciones, definidas y ordenadas en función de los datos, resuelven el problema o la tarea.",
                    "semana": 1
                },
                {
                    "subtema": " 1.3 Bit",
                    "texto": "En informática y otras disciplinas, unidad mínima de información, que puede tener solo dos valores (cero o uno).",
                    "semana": 2
                },
                {
                    "subtema": " 1.4 Lógica y conjuntos",
                    "texto": "Un conjuntos es la reunión en un todo de objetos bien definidos y diferenciables entre sí, que se llaman elementos del mismo. Si a es un elemento del conjunto A se denota con la relación de pertenencia a Î A. En caso contrario, si a no es un elemento de A se denota aÏ A.",
                    "semana": 2
                },
                {
                    "subtema": " 1.5 Código binario y su almacenamiento (Bytes)",
                    "texto": "Los códigos binarios son un arreglo de dos caracteres, 1 y 0. Entonces, con sólo estos dos dígitos se pueden representar a todo el conjunto de números. También se pueden realizar operaciones lógicas y aritméticas.",
                    "semana": 3
                },
                {
                    "subtema": " 1.6 Representación de lenguaje de algo nivel Carácter (ASCII)",
                    "texto": "El código ASCII es una codificación de caracteres que determina su representación en los dispositivos electrónicos como, por ejemplo, los ordenadores. Ahora bien, para que un ordenador pueda procesar los caracteres individuales, primero deben adoptar valores binarios, decimales y hexadecimales.",
                    "semana": 4
                },
                {
                    "subtema": " 1.7 Arquitecturas Hardware",
                    "texto": "El hardware de una computadora está compuesto por la unidad central, los dispositivos periféricos de entrada, de salida y de entrada/salida, así como por los cables, conexiones y puertos que permiten la interacción de todos ellos. Todos estos elementos en conjunto constituyen la arquitectura básica de la computadora.",
                    "semana": 5
                },
                {
                    "subtema": " 1.8 Software",
                    "texto": "Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.",
                    "semana": 6
                }

            ]
        },
        {
            "titleUnidad":"Unidad 2 - Industria X.0",
            "Unidad": [
                {
                    "subtema": "2.1 Los sistemas del sistema empresa ERPs",
                    "texto": "l término ERP se refiere a Enterprise Resource Planning, que significa “sistema de planificación de recursos empresariales”. Estos programas se hacen cargo de distintas operaciones internas de una empresa, desde producción a distribución o incluso recursos humanos.",
                    "semana": 7
                },
                {
                    "subtema": "2.2 Interfaz Hombre-Máquina",
                    "texto": "El Interfaz Hombre-Máquina (HMI) es el interfaz entre el proceso y los operario; se trata básicamente de un panel de instrumentos del operario. Es la principal herramienta utilizada por operarios y supervisores de línea para coordinar y controlar procesos industriales y de fabricación.",
                    "semana": 8
                }
            ]
        },
        {
            "titleUnidad":"Unidad 3 - Gestión de proyectos TI",
            "Unidad": [
                {
                    "subtema": " 3.1 Introducción metodología PMI",
                    "texto": "Un estándar global del PMI brinda lineamientos, reglas y características, ampliamente aceptados a nivel mundial, se aplican consistentemente, y ayudan a lograr la excelencia profesional y organizacional en la Administración de Proyectos.",
                    "semana": 9
                },
                {
                    "subtema": " 3.2 Orígenes de la administración de proyectos",
                    "texto": "Surge en los años de 1950 con Bernard Schriever, para la gestión de proyectos militares. Nace también el concepto concurrente, donde los trabajos deben ejecutarse por separado para encontrarse en un punto.",
                    "semana": 10
                },
                {
                    "subtema": " 3.3 Complejidad de los proyectos de IT",
                    "texto": "La gestión de proyectos de tecnologías de información (TI) es el proceso de planear, organizar y delimitar la responsabilidad de la realización de las metas específicas de TI de una organización.",
                    "semana": 11
                },
                {
                    "subtema": " 3.4 Metodologías",
                    "texto": "Una metodología de desarrollo define las fases del proyecto software, qué actividades deben de ejecutarse en cada una de la fases y su secuencia, qué roles y responsabilidades hay en cada fase del desarrollo.",
                    "semana": 12
                },
                {
                    "subtema": " 3.5 Restricciones",
                    "texto": "Por capacidad entendemos la cantidad máxima que un sistema o un proceso puede generar. Las restricciones pueden encontrarse en los operarios, las máquinas, los recursos materiales, los recursos financieros y el espacio utilizado.",
                    "semana": 12
                },
                {
                    "subtema": " 3.6 Análisis de sistemas",
                    "texto": "El análisis de un sistema es una de las fases en la construcción de un sistema informático, y, releva los datos (información) actuales para proponer una solución a futuro rasgos generalizados. En el análisis de un sistema podemos encontrar las siguientes etapas: Conceptualización. Análisis funcional.",
                    "semana": 13
                },
                {
                    "subtema": " 3.7 Life cycle",
                    "texto": "El ciclo de vida de desarrollo de un sistema (SDLC) es un proceso lógico utilizado en el mundo del Desarrollo de Software sistemas para desarrollar un sistema de información, incluidos los requisitos, la validación, formación, como los usuarios (interesados) en la propiedad.",
                    "semana": 13
                },
                {
                    "subtema": " 3.8 Control de cambios",
                    "texto": "El propósito de la práctica de control de cambios es maximizar el número de cambios de productos y servicios exitosos al garantizar que los riesgos se hayan evaluado correctamente, autorizar que se realicen los cambios y administrar el programa de cambios.",
                    "semana": 14
                }
            ]
        },
        {
            "titleUnidad":"Unidad 4 - Internet de las cosas",
            "Unidad": [
                {
                    "subtema": " 4.1 Introducción del Internet de las Cosas Industrial (IoT)",
                    "texto": "IoT tiene como objetivo extender la conectividad a Internet más allá de las computadoras y los teléfonos inteligentes a otros dispositivos que las personas usan en el hogar o para los negocios. La tecnología permite que los dispositivos se controlen a través de la infraestructura de red de forma remota.",
                    "semana": 15
                },
                {
                    "subtema": " 4.2 Desarrollo e implementación de soluciones para IoT",
                    "texto": "Las soluciones IoT son una muestra de cómo la tecnología se pone al servicio de la humanidad y del planeta, aplica en los hogares, industrias y ciudades, para optimizar el uso de los recursos, reducir riesgos y, en general, dar una mejor calidad de vida con un lineamiento sostenible.",
                    "semana": 16
                },
                {
                    "subtema": " 4.3 Introducción, gestión y almacenamiento de información generada por IoT",
                    "texto": "La demanda de análisis del constante flujo de grandes volúmenes de información generada por el internet de las cosas (IoT) es denominador común en las empresas. Esto hace que la tecnología se vea obligada a dar respuestas ante estas nuevas necesidades de análisis de datos, a partir de las que poder obtener información valiosa para muy distintos fines, desde científicos hasta empresariales o, entre otros, con el objetivo de diseñar mejores políticas.",
                    "semana": 17
                }
            ]
        },
        
    ]

    /*Función para poner la palomita ✓ */
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

    /*Función para crear la fila de Unidades */
    function createTable(informationJson){
        let row = []
        for (let indexUnidad = 0; indexUnidad < informationJson.length;indexUnidad ++){
            row.push(
            <tr className=''>
                {/*Fila de Unidad*/}
                <th style={{ color: "#0C345C" }} className='fs-5' scope="row">{informationJson[indexUnidad].titleUnidad}</th>
            </tr>,
            linkedData(informationJson, indexUnidad)
            )
        }
        return row
    }

    /*Función para crear las filas de subtema además del texto y linkear cada subtema(con su información) a componente Unidad */
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


    return (
        <div >
            <NavbarCronograma/>
            <div className='d-flex justify-content-center align-items-center my-4' id='Cronograma' >
            <div className='container border border-2 rounded-3 p-2'  >
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
                        <tbody >
                            {createTable(cursos)}
                        </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export { Cronograma }