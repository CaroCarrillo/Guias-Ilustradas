import {useState} from 'react'
import FormInput from '../FormInput/index.jsx'
import "./index.css"
import cuceiBlack from '../assets/images/cuceiBlack.png'
import udg from '../assets/images/udg.png'

const ExampleForm = () => {

const [values,setValues] = useState({
username:"", 
email:"",
birthday:"",
password:"",
confirmPassword:"",
});

const inputs =[
    {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"El usuario debe ser entre 3-16 caracteres y no debe tener caracteres especiales",
    label:"Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    },
    {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"Debe ser un email válido",
    label:"Email",
    required: true,
    },
    {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    label:"Birthday"
    },
    {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"La contraseña debe tener entre 8-20 caracteres e incluir al menos una letra, un número y un caracter especial",
    label:"Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    },
    {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"La contraseña no coincide",
    label:"Confirm Password",
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
        <div className='login'> 
            <form onSubmit={handleSubmit}>
                <img src={udg} alt="" />
                <img src={cuceiBlack} alt="" />
                <h1>Registro</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button type='submit'>Submit</button>

            </form>
            
        </div>
    );
};

export default ExampleForm;