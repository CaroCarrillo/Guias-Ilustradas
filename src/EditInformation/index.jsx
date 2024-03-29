import {useState} from 'react'
import FormInput from '../FormInput/index.jsx'
import "./index.css"

const EditInformation = () => {

    const [values,setValues] = useState({
        code:"",
        phone:"",
        name:"",
        lastname:"",
        emailI:"",
        emailP:"",
        username:"", 
        comentarios:"",
        updateImageProfile:"",
        acceptPublicationData:""


        });
        
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
            name:"phone",
            type:"text",
            placeholder:"Teléfono",
            errorMessage:"El teléfono debe ser de 10 números",
            label:"Teléfono",
            pattern: "^[0-10]{10}$",
            required: true,
            },
            {
            id:3,
            name:"name",
            type:"text",
            placeholder:"Nombre(s)",
            label:"Nombre(s)",
            required: true,
            },
            {
            id:4,
            name:"lastname",
            type:"text",
            placeholder:"Apellidos",
            label:"Apellidos",
            required: true,
            },
            {
            id:5,
            name:"emailI",
            type:"email",
            placeholder:"Correo institucional",
            errorMessage:"Debe ser un email válido",
            label:"Correo institucional",
            required: true,
            },
            {
            id:6,
            name:"emailP",
            type:"email",
            placeholder:"Correo personal",
            errorMessage:"Debe ser un email válido",
            label:"Correo institucional",
            required: true,
            },
            {
            id:7,
            name:"username",
            type:"text",
            placeholder:"Nombre de usuario",
            errorMessage:"El usuario debe ser entre 3-16 caracteres y no debe tener caracteres especiales",
            label:"Nombre de usuario",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
            },
            {
            id:8,
            name:"Comentarios",
            type:"text",
            placeholder:"Comentarios",
            errorMessage:"Debe ser menos a 200 caracteres",
            label:"Comentarios",
            pattern: "^[A-Za-z0-9]{0,200}$",
            required: true,
            },
            {
            id:9,
            name:"updateImageProfile",
            type:"file",
            label:"Actualizar foto de perfil",
            style:{border: "none"},
            required: false,
            },
            {
            id:10,
            name:"acceptPublicationData",
            type:"radio",
            label:"Autorizar la publicación de mis datos de contacto",
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
                <div id='editProfile'>
                    
                    <div  id='alignCenter'>
                        <h1>Editar Perfil de Profesor</h1>
                        <form>
                            {inputs.map((input) => (
                                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                            ))}
                            
                    </form>
                        {/***********************************
                        <button onClick={handleSubmit} >Enviar</button>
                        *************************************
                        //*Este botón se utilizará una vez que el back-end esté listo para conectarse al front-end, por mientras como demostración se va a linquear el siguiente enlace (a) */}
                        
                        {/*este es el link debe cambiarse por el botón*****************************/}
                        <a href="/Usuario" data-toggle="InformacionProfesor" type='button' className='datosProfesor'>Guardar</a>
                        {/*******************************************************************/}
                    </div>
                </div>
            );
        };

export default EditInformation;