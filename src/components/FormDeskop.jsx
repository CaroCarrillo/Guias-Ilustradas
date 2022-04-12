import {useState} from 'react'
import FormInput from './FormInput'
import "./styleForms.css"
import udg from '../assets/images/udg.png'

const FormDeskop = () => {

const [values,setValues] = useState({
username:"", 
});

const inputs =[
    {
    id:1,
    name:"username",
    type:"username",
    placeholder:"Nombre de Usuario",
    errorMessage:"Nombre de usuario no registrado",
    label:"Nombre de Usuario",
    required: true,
    },
]

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
};

const back = (e) => {
    e.preventDefault();
    console.log(values);
};

const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value });
};

    return(
        <div className='containerLogin'>
            <form2>
                <form>
                <button1 onClick={back}  >←</button1>
                <h1>JOSEFA ESTEFANÁ CARRILLO TORRES</h1>
                <img src={udg} alt="" width="10" height="100" />
                <h2>Información Personal</h2>
                <h3>Código</h3>
                <h4>211616209</h4 >
                <h3>Correo electrónicoooo</h3>
                <h4>correo.profesor@cucei.udg.mx</h4 >
                <h3>Cargo</h3>
                <h4>Profesor</h4 >
                <h3>Fecha de creación</h3>
                <h4>Enero 20, 2022, 20:20</h4 >
                
                <button onClick={handleSubmit} >Editar Datos</button>
                </form>
            </form2>
        </div>
    )
    
};

export default FormDeskop;