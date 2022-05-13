import {useState} from 'react'
import FormInput from '../FormInput'
import "./index.css"

const FormLogin = () => {

const [values,setValues] = useState({
email:"", 
password:"",
//recordarContraseña:""
});

const inputs =[
    {
    id:1,
    name:"email",
    type:"email",
    placeholder:"Correo institucional",
    errorMessage:"Debe ser un email válido",
    label:"Correo institucional",
    required: true,
    },
    {
    id:2,
    name:"password",
    type:"password",
    placeholder:"Contraseña",
    errorMessage:/*"PONER CONDICION QUE DIGA QUE DEBE COINCIDIR CON LA CONTRASEÑA ASIGNADA A ESTE EMAIL"*/"La contraseña debe tener entre 8-20 caracteres e incluir al menos una letra, un número y un caracter especial",
    label:"Contraseña",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    }/*,
    {
    id:3,
    name:"recordarContraseña",
    type:"radio",
    label:"Recordar contraseña",
    required: true,
        }*/
]

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
};

const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value });
};
    
    return (
        <div className='containerLogin'>
            <form>
                <h2>Bienvenido al sistema de gestión de materias</h2>
                <h1>Ingresa a tu cuenta</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <a href="/OlvideContrasena" data-toggle="Contraseña" className='enlace'>¿Olvidaste tu contraseña?</a>

                {/***********************************
                <button onClick={handleSubmit} >Enviar</button>
                *************************************
                //*Este botón se utilizará una vez que el back-end esté listo para conectarse al front-end, por mientras como demostración se va a linquear el siguiente enlace (a) --> */}
                
                {/*este es el link debe cambiarse por el botón*****************************/}
                <a href="/Usuario" data-toggle="InformacionProfesor" type='button' className='enlacePerfil'>Enviar</a>
                {/*******************************************************************/}
                <a href="/Registro" data-toggle="Registro" className='enlace'>Si aún no tienes, registrate ahora</a>
            </form>
        </div>
    );
};

export default FormLogin;