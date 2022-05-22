import {useState} from 'react'
import FormInput from '../FormInput/index.jsx'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./index.css"

const FormRecoverPassword = () => {
    const [emailSended, setEmailSended] = useState("hidden");
    const [colorSelected, setColoSelected] =  useState(false);
    const [emailTexto, setEmailTexto] =  useState("");
    const navigate = useNavigate();
const [values,setValues] = useState({
email:"",
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
    }
]

const handleSubmit = (e) => {
    
    e.preventDefault();
    const opts = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    }
    fetch("http://127.0.0.1:5000/resetPassword", opts)
        .then(resp => { return resp.json() })
        .then(resp => {
            if (resp.status === 200 && resp.email === "succesReset") {
                setEmailSended("visible") 
                setEmailTexto("Email enviado correctamente")
                setColoSelected(true)
            }
            if (resp.status === 200 && resp.email === "NotValid") {
                setEmailSended("visible") 
                setEmailTexto("Email no valido")
                setColoSelected(false)
            }
        })
        .catch(e => {
            console.log(e)
        })
};

const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value });
};
    
    return (
        <div className='containerRecoverPassword'>
            <form>
                <h1>Recuperación de contraseña</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button onClick={handleSubmit} >Enviar</button>
                <div style={{color: colorSelected ? "blue" : "red",
                             visibility:emailSended}}>
                    { emailTexto }
                </div>
                <a href="./Ingresar"> sing in</a>
            </form>
            

        </div>

    );
};

export default FormRecoverPassword;