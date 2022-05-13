import React from 'react';
import './index.css'
import { AiOutlineHome } from "react-icons/ai"; /*Ícono de home*/
import { RiFileList2Line } from "react-icons/ri";/*Ícono de planeación*/ 
import { MdArrowRight } from "react-icons/md"; /*Ícono de flecha*/ 
import { HiOutlineDocumentDuplicate } from "react-icons/hi";/*Ícono de datos profesionales*/


const NavbarCaro = () => {
    return (
        <div>
            <nav className="navbar" style={{backgroundColor: "rgba(12, 52, 92, .7)", height: 80 }}>
                <div className="container-fluid">
                    <div className='d-flex justify-content-start' id='navbarPlaneacion'>
                        <a href="/Usuario" aria-labelledby='Home' ><h1><AiOutlineHome /></h1></a> &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <h1><RiFileList2Line/> Planeación</h1> 
                        &nbsp; &nbsp; <h1><MdArrowRight/></h1> &nbsp; &nbsp; 
                        <h1><HiOutlineDocumentDuplicate /> Datos profesionales</h1>
                    </div>
                </div>
            </nav>
        </div>    
    );
};

export {NavbarCaro};