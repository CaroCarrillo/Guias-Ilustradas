import {useState} from 'react'
import FormInput from '../FormInput/index.jsx'
import "./index.css"

const FormRecoverPassword = () => {

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
    console.log(values);
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
                {/*<button onClick={handleSubmit} >Enviar</button>*/}
                <a href="/OlvideContrasena2" data-toggle="OlvideContrasena2" type='button'>Enviar</a>
            </form>
        </div>
    );
};

export default FormRecoverPassword;