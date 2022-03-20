import {useState} from 'react'
import FormInput from './FormInput'
import "./styleForms.css"

const Login1 = () => {

const [values,setValues] = useState({
email:"", 
password:"",
confirmPassword:""
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
    },
    {
    id:3,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirmar contraseña",
    errorMessage:"La contraseña no coincide",
    label:"Confirmar contraseña",
    pattern: values.password,
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
                <h1>Recuperación de contraseña</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button onClick={handleSubmit} >Enviar</button>
            </form>
        </div>
    );
};

export default Login1;