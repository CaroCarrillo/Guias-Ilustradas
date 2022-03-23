/*import * as FaIcons from "react-icons/fa";*/
import { BiHelpCircle } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './styleUsuario.css'


const Usuario = () => {
    const nombreProfesor = require.context('../../assets/images', true);

    const SidebarData = [
        {
        title: 'Manual',
        path: '/manual',
        icon: <BiHelpCircle/>,
        cName: 'nav-text'
        },
        {
        title: 'Planeación',
        path: '/planeacion',
        icon: <RiFileList2Line/>,
        cName: 'nav-text'
        },
        {
        title: 'Cursos',
        path: '/cursos',
        icon: <HiOutlineDocumentDuplicate/>,
        cName: 'nav-text'
        },
    ]
    
    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="Botón editar">Button with data-bs-target
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="menuLateral" aria-labelledby="Visualización de perfil general">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Cucei</h5>

                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <h1>Nombre del profesor ya logueado</h1>
                        
                        <img 
                            src={nombreProfesor('./udg.png')} s
                            classNameName="rounded-circle " 
                            alt="..." />
                    </div>
                    <div>
                        <ul>
                            {SidebarData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <p>{item.icon}</p>
                                        <p>{item.title}</p>
                                        ({item.title} = "Planeacion") ? <Link to={item.path}></Link> 
                                    
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuario;