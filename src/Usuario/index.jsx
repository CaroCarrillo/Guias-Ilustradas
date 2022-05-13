/*import * as FaIcons from "react-icons/fa";*/
import { BiHelpCircle } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { Link } from 'react-router-dom';
import {NavbarCaro} from "../NavbarCaro";
import {Navbar} from "../Navbar";
import './index.css'

const Usuario = () => {
    const nombreProfesor = require.context('../assets/images', true);
    
    return (
        <div>
            <Navbar />
            <NavbarCaro/>
            <div className='containerInformation'>
                <form>
                {/*<button1 onClick={back}  >←</button1>*/}
                <h1>JOSEFA ESTEFANIA CARRILLO TORRES</h1>
                <img src={nombreProfesor('./profesora.jpg')} className="rounded-circle" alt="Imagen profesor" />
                <h2>Información Personal</h2>
                <h3>Código</h3>
                <h4>211616209</h4 >
                <h3>Correo electrónico</h3>
                <h4>correo.profesor@cucei.udg.mx</h4 >
                <h3>Cargo</h3>
                <h4>Profesor</h4 >
                <h3>Fecha de creación</h3>
                <h4>Enero 20, 2022, 20:20</h4 >
                <a href="/EditarInformacion" data-toggle="Usuario" type='button'>Editar datos</a>
                <a href="/Usuario" data-toggle="Usuario" type='button' data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="Menu">Menú</a>
                {/*<button onClick={handleSubmit} >Editar Datos</button>*/}
                </form>
            </div>

            
        {/*

            {/*botón que abre la barra lateral 
            <button 
                className="btn btn-primary" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#menuLateral" 
                aria-controls="Botón editar">
                Editar perfil
            </button>*/}
            
            {/*Inicio de barra lateral */}
            <div 
                className="offcanvas offcanvas-start" 
                tabindex="-1" id="menuLateral"
                aria-labelledby="menuLateralPerfil">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">CUCEI</h5>
                    {/*Botón de cierre de menú lateral*/}
                    <button
                        type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                <div className="offcanvas-body d-block justify-content-center vh-100 my-5" >
                    <div className="text-center ">
                        <h5>Josefa Estefanía Carrillo Torres</h5>
                        <img 
                            src={nombreProfesor('./profesora.jpg')} 
                            className="rounded-circle" 
                            alt="Imagen profesor" />
                    </div>
                    <div className="my-5" >
                        {/*Botón Link Manual*/}
                        <Link to="/Manual" tabindex="-1" role="button" aria-disabled="true"><BiHelpCircle/> Manual</Link>
                        {/*Dropdown de planeación*/}
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownPlaneacion" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false"><RiFileList2Line /> Planeación
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownPlaneacion">
                                <li className="dropdown-item" ><Link to="/Cursos"> <HiOutlineDocumentDuplicate />  Mis cursos</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuario;