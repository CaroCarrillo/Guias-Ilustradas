import React from 'react'
import { Navbar } from '../Navbar'
import {SearchNav} from '../SearchNav'
import {MateriaTable} from '../MateriaTable'
import udg from '../assets/images/udg.png'

import './index.css'
function Curses() {
  return (
    <div>
      <Navbar/> 
      <SearchNav/>
      <MateriaTable/>
    </div>
  )};

  export {Curses}