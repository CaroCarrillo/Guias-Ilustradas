
import FormInput from '../FormInput'
//import "./login2.css"
import cuceiBlack from '../assets/images/cuceiBlack.png'
import udg from '../assets/images/udg.png'
import './index.css'
import { useContext } from 'react'
import { AppContext } from '../Context';
import { Link, useNavigate } from 'react-router-dom'

const FormSignin = () => {

    const { registerValues,
        userStatus,
        handleRegisterSubmit,
        OnChangeRegisterValues} = useContext(AppContext)
    const navigate = useNavigate()


const inputs =[
    {
    id:1,
    name:"code",
    type:"text",
    placeholder:"Código",
    errorMessage:"El código debe ser de 9 números",
    label:"Código",
    pattern: "^[0-9]{9}$",
    required: true,
    },
    {
    id:2,
    name:"name",
    type:"text",
    placeholder:"Nombre(s)",
    label:"Nombre(s)",
    required: true,
    },
    {
    id:3,
    name:"lastname",
    type:"text",
    placeholder:"Apellidos",
    label:"Apellidos",
    required: true,
    },
    {
    id:4,
    name:"username",
    type:"text",
    placeholder:"Nombre de usuario",
    errorMessage:"El usuario debe ser entre 3-16 caracteres y no debe tener caracteres especiales",
    label:"Nombre de usuario",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    },
    {
    id:5,
    name:"email",
    type:"email",
    placeholder:"Correo institucional",
    errorMessage:"Debe ser un email válido",
    label:"Correo institucional",
    required: true,
    },
    {
    id:6,
    name:"password",
    type:"password",
    placeholder:"Contraseña",
    errorMessage:"La contraseña debe tener entre 8-20 caracteres e incluir al menos una letra, un número y un caracter especial",
    label:"Contraseña",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    },
    {
    id:7,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirmar contraseña",
    errorMessage:"La contraseña no coincide",
    label:"Confirmar contraseña",
    pattern: registerValues.password,
    required: true,
    }
]





    
    return (
        <div className='containerSignin'>
            {console.log(userStatus)}
            <div className='headerForm'>
                <img src={udg} alt="" />
                <img src={cuceiBlack} alt="" />
                <h1>Formulario de registro</h1>
            </div> 
            <form>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={registerValues[input.name]} onChange={OnChangeRegisterValues}/>
                ))}
            </form>
            <div className='buttonForm'>
                <button onClick={handleRegisterSubmit} >Enviar</button>
                {
                userStatus.user === "occuped"? 
                        (<div>
                            <div style={{ color: "red" }}>
                                El correo electronico o código ya se encuentran en uso
                            </div>
                            <div>
                                <a href="/Ingresar" style={{ color: "blue" }}> Regresar a inicio</a>
                            </div>
                        </div>
                    
                ) 
                : (userStatus.user === "created_success"? navigate("/Ingresar")
                : (userStatus.user === "pendding"? "": navigate("./error")))}
                
            </div>
            
            
        </div>
    );
};

export default FormSignin;