import React from 'react'
import udg from '../assets/images/udg.png'
import "./index.css"
import { DropdownProfile } from '../DropdownProfile'


function NavbarCurses() {
  return (
    <div>
      <nav className="navbar navbar-light NavbarCurses">
        <div className='position-absolute top-50 end-0 translate-middle-y h-100'>
          <div className='d-inline-block' > <img src={udg} alt="" /></div>
          <div className='d-inline-block'><DropdownProfile /></div>
          
          
        </div>

      </nav>
    </div>

    
  )
}

export {NavbarCurses}
