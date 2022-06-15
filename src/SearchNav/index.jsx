import React from 'react';
import './index.css'
//import { AiOutlineHome } from "react-icons/ai"; /*Ícono de home*/
import { RiFileList2Line } from "react-icons/ri";/*Ícono de planeación*/ 
import { MdArrowRight } from "react-icons/md"; /*Ícono de flecha*/ 
import { HiOutlineDocumentDuplicate } from "react-icons/hi";/*Ícono de datos profesionales*/


const SearchNav = (props) => {
    return (
        <div>
            <nav className="navbar" style={{backgroundColor: "rgba(12, 52, 92, .7)", height: 100 }}>
                <div className="container-fluid">
                    <div className='d-flex justify-content-start ps-5' id='navbarPlaneacion'>
                        <h1><RiFileList2Line/> Planeación</h1> 
                        &nbsp; &nbsp; <h1><MdArrowRight/></h1> &nbsp; &nbsp; 
                        <h1><HiOutlineDocumentDuplicate /> {props.namePlaneacion}</h1>
                    </div>
                    <div className='d-flex justify-content-end pe-5'>
                        <input className='search-materia-info rounded-pill px-5 border border-5' type="text" placeholder='Buscar Materia' style={{fontSize: "1.2em", color:"black"}}/>
                    </div>
                    
                </div>
            </nav>
        </div>    
    );
};

export {SearchNav}