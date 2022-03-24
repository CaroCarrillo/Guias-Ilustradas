/*import * as FaIcons from "react-icons/fa";*/
import { BiHelpCircle } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './index.css'


const Usuario = () => {
    const nombreProfesor = require.context('../assets/images', true);
    
    return (
        <div>
            {/*botón que abre la barra lateral */}
            <button 
                className="btn btn-primary" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#menuLateral" 
                aria-controls="Botón editar">
                Editar perfil
            </button>
            {/*Inicio de barra lateral */}
            <div 
                className="offcanvas offcanvas-start" 
                tabindex="-1" id="menuLateral"
                aria-labelledby="menuLateralPerfil">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Cucei</h5>
                    {/*Botón de cierre de menú lateral*/}
                    <button
                        type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
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
                    <div className="" >
                        {/*Botón Link Manual*/}
                        <Link to="/Manual" tabindex="-1" role="button" aria-disabled="true"><RiFileList2Line/> Manual</Link>
                        {/*Dropdown de planeación*/}
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownPlaneacion" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false"><BiHelpCircle /> Planeación
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