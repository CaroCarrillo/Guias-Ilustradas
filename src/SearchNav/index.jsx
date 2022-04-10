import React from 'react'
import './index.css'

import { Link } from 'react-router-dom';

import { RiFileList2Line } from "react-icons/ri";

import { AiOutlineHome } from "react-icons/ai";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
function SearchNav() {
  return (
      
    <div id='search-nav-bar'>
      <div className='container-fluid pt-4'>
        <div className='row'>
          <div className='col'>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Planeación &nbsp; &nbsp;> &nbsp; &nbsp; Mis cursos
          </div>
          <div className='col'>
            <input className='search-materia-info' type="text" placeholder='Buscar Materia'/>
          </div>

        </div>
      </div>

    </div>
  )
  
}

export {SearchNav}