import React from 'react'
import { NavbarCronograma } from '../NavbarCronograma'


function Cronograma() {
    return (
        <div >
            <NavbarCronograma />
            <div className='div d-flex justify-content-center align-items-center mt-5' >
            <div className='container border border-5 rounded-3 p-4 mt-5' >
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: "#0C345C" }} className='fs-5' >Semanas</th>
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                            <th scope="col">8</th>
                            <th scope="col">9</th>
                            <th scope="col">10</th>
                            <th scope="col">11</th>
                            <th scope="col">12</th>
                            <th scope="col">13</th>
                            <th scope="col">14</th>
                            <th scope="col">15</th>
                            <th scope="col">16</th>
                            <th scope="col">17</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "#0C345C" }} scope="row">Unidad 1</th>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <th style={{ color: "#0C345C" }} scope="row">Unidad 2</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <th style={{ color: "#0C345C" }} scope="row">Unidad 3</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <th style={{ color: "#0C345C" }} scope="row">Unidad 4</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export { Cronograma }