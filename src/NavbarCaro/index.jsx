import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

import { RiFileList2Line } from "react-icons/ri";

import { AiOutlineHome } from "react-icons/ai";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";


const NavbarCaro = () => {
    return (
        <div>
            <nav class="navbar" style={{backgroundColor: "#0C345C"}}>
                <div class="container-fluid">
                    <div className='d-flex justify-content-start'>
                        <a href="/#" aria-labelledby='Home'><AiOutlineHome /></a> &nbsp; &nbsp; &nbsp;
                        <a aria-current="page" href="/#" ><RiFileList2Line/> Planeación </a>&nbsp; &nbsp;
                        <Link to="/Cursos"> <MdArrowRight />&nbsp; &nbsp;<HiOutlineDocumentDuplicate /> Datos profesionales</Link>
                    </div>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>    
    );
};

export default NavbarCaro;