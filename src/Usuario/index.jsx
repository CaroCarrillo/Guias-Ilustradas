/*import * as FaIcons from "react-icons/fa";*/
import { BiHelpCircle } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Usuario = () => {
    const nombreProfesor = require.context('../assets/images', true);

    const SidebarData = [
        {
        title: 'Manual',
        path: '/',
        icon: <BiHelpCircle/>,
        cName: 'nav-text'
        },
        {
        title: 'Planeación',
        path: '/planeacion',
        icon: <RiFileList2Line/>,
        cName: 'nav-text'
        },
    ]
    
    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="Botón editar">Button with data-bs-target
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="Visualización de perfil general">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cucei</h5>
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
                    <div className='navbar'>
                        {/*<Link to='#' className='menu-bars'>
                            <BiHelpCircle/>
                        </Link>*/}
                        <ul>
                            {SidebarData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        {item.path}
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <a 
                        href="/#" 
                        className="btn btn-primary btn-lg disabled" 
                        tabindex="-1" 
                        role="button" 
                        aria-disabled="true">Manual
                    </a>
                    <div className="dropdown">
                        <a 
                            className="btn btn-secondary dropdown-toggle" 
                            href="/#" 
                            role="button" 
                            id="dropdownMenuLink" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            Planeación
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="/#">Mis cursos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Usuario};