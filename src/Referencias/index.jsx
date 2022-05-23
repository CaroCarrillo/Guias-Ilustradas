import React from 'react';
import { NavbarCronograma } from '../NavbarCronograma'

function Referencias() {
    return (
        <div>
            <NavbarCronograma />
            <div id='InfAdm' className='row align-items-center justify-content-center vh-100' >
                <div className='col-sm-6 text-center'>
                    <h4 className="fw-bold">Informática Administrativa</h4>
                    <h5 className='fw-normal'>Universidad de Guadalajara</h5>
                    <h6 className='fw-lighter'>Centro Universitario de Ciencias Exáctas e Ingenierías</h6>
                    <h6 style={{"textAlign":"initial"}}>
                        <ul>
                            <li>Krajewski, J.L; Ritzman P. Administración y operaciones:Estrategia y análisis. Prentice Hall, 5ta edición. 2000.</li>
                            <li>Krajewski, J.L; Ritzman P. Administración de operaciones, procesos y cadena de suministros. Pearson, 10ma edición. 2013.</li>
                            <li>Turban, E; Rainer, R; Potter. Introduction to information technology. John Wiley Sons, 5ta edición. 2007.</li>
                            <li>A guide to the Project management body of knowledge PMBOK Guide sixth edition. PMI. ISBN: 978-1-62825-194-4. 2017.</li>
                            <li>ISO/ IEC 20000-1 Fundamentos de Gestión. 2011.</li>
                            <li>ITIL Intermediate Certification Companion Study Guide, Sybex, Helen Morris. ISBN: 978-1-63825-199-9. 2017.</li>
                            <li>Foundations of IT Service Management Base don ITIL V3, ITSM Library, Jan Van Bon. Vah Haren Publishina, ISBN: 978 90 853 057 0. 2011.</li>
                            <li>Gobierno de Tecnologías y los sistemas de información. Mario G. Plattini Velthus, RA MA. 2010.</li>
                            <li>Estándar ISO IEC 38500:2008 Corporate Governance of Information Technology.</li>
                            <li>Governance and Information Technology. Viktor Mayer Schonberger.</li>
                            <li>The Desing of Everyday Things. Donald A. Norma, Currency Doubleday, 1988, ISBN: 0-385-26 774 6.</li>
                            <li>Deslgning for the Digital Age How I Create Human-Centered Products and Services. Kim Goodwin, Wiley Publishing Inc. ISBN: 978-0-470-22910 1. 2009.</li>
                        </ul>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Referencias;