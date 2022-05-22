import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput'
//import "./login2.css"
import cuceiBlack from '../assets/images/cuceiBlack.png'
import udg from '../assets/images/udg.png'
import './index.css'

const FormSignin = () => {
    const [existingUser, setExistingUser] = useState("hidden");
    const navigate = useNavigate();
    const [values, setValues] = useState({
        code: "",
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "code",
            type: "text",
            placeholder: "Código",
            errorMessage: "El código debe ser de 9 números",
            label: "Código",
            pattern: "^[0-9]{9}$",
            required: true,
        },
        {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "Nombre(s)",
            label: "Nombre(s)",
            required: true,
        },
        {
            id: 3,
            name: "lastname",
            type: "text",
            placeholder: "Apellidos",
            label: "Apellidos",
            required: true,
        },
        {
            id: 4,
            name: "username",
            type: "text",
            placeholder: "Nombre de usuario",
            errorMessage: "El usuario debe ser entre 3-16 caracteres y no debe tener caracteres especiales",
            label: "Nombre de usuario",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 5,
            name: "email",
            type: "email",
            placeholder: "Correo institucional",
            errorMessage: "Debe ser un email válido",
            label: "Correo institucional",
            required: true,
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage: "La contraseña debe tener entre 8-20 caracteres e incluir al menos una letra, un número y un caracter especial",
            label: "Contraseña",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmar contraseña",
            errorMessage: "La contraseña no coincide",
            label: "Confirmar contraseña",
            pattern: values.password,
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }
        fetch("http://127.0.0.1:5000/register", opts)
            .then(resp => { return resp.json() })
            .then(resp => {
                if (resp.status === 200 && resp.user === "created_success") {
                    
                    navigate('/Ingresar');
                }
                if (resp.status === 200 && resp.user === "occuped") {
                    setExistingUser("visible")
                }
            })
            .catch(e => {
                console.log(e)
            })
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className='containerSignin'>
            <div className='headerForm'>
                <img src={udg} alt="" />
                <img src={cuceiBlack} alt="" />
                <h1>Formulario de registro</h1>
            </div>
            <form>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
            </form>
            <div className='buttonForm'>
                <button onClick={handleSubmit} >Enviar</button>
                <div style={{color:"red",
                             visibility:existingUser}}>
                    El correo o el codigo ya se encuentra en uso
                </div>
                {/*<a href="/Ingresar" data-toggle="Ingresar" type='button'>Enviar</a>*/}
            </div>
        </div>
    );
};

export default FormSignin;