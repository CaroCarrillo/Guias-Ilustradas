
import FormInput from '../FormInput/index.jsx'
import "./index.css"
import { useContext } from 'react';
import { AppContext } from '../Context/index.jsx';
import { useNavigate } from 'react-router-dom';
const FormRecoverPassword = () => {
    const { recoveryEmail,
        onChangeRecoveryPassword,
        recoveryPasswordSubmmit,
        recoveryEmailStatus} = useContext(AppContext)
const navigate = useNavigate()

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




    
    return (
        <div className='containerRecoverPassword'>
            <form>
                <h1>Recuperación de contraseña</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={recoveryEmail[input.name]} onChange={onChangeRecoveryPassword}/>
                ))}
                <button onClick={recoveryPasswordSubmmit} >Enviar</button>
                {recoveryEmailStatus.message === "succesReset" 
                ? 
                (
                <div>
                    <div style={{color:"blue"}}>EL token de acceso a sido enviado a el correo indicado</div>
                    <a style={{color:'blue'}} href="/Ingresar">Iniciar sesion</a>
                </div>
                )
                : 
                (recoveryEmailStatus.message === "NotValid" 
                ?
                ((<div>
                    <div style={{color:"red"}}>Correo no encontrado, verifique con el administrador</div>
                    <a style={{color:'blue'}} href="/Ingresar">Iniciar sesion</a>
                </div>))
                :
                (recoveryEmailStatus.status === 500
                ?  navigate('/error')
                :
                ""
                ))}
                {console.log(recoveryEmailStatus)}
            </form>
            
        </div>
    );
};

export default FormRecoverPassword;