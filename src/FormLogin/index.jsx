import {useState} from 'react'
import FormInput from '../FormInput'
import "./index.css"

const FormLogin = () => {

const [values,setValues] = useState({
email:"", 
password:"",
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
    errorMessage:"PONER CONDICION QUE DIGA QUE DEBE COINCIDIR CON LA CONTRASEÑA ASIGNADA A ESTE EMAIL",
    label:"Contraseña",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    }
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
                <button onClick={handleSubmit} >Enviar</button>
            </form>
        </div>
    );
};

export default FormLogin;