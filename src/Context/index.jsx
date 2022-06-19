import axios from 'axios';
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const AppContext  = createContext()

function AppContextProvider(props){
    // States for user register
    const [registerValues,setRegisterValues] = useState({
        code:"",
        name:"",
        lastname:"",
        username:"", 
        email:"",
        password:"",
        confirmPassword:"",
        });
    const [userStatus, SetUserStatus] = useState({"status":200, "user":"pendding"})
    // Handdle submit, request to register user
    const handleRegisterSubmit = (e) => {
            e.preventDefault();
            
            axios.post('http://127.0.0.1:5000/register', {
                registerValues
              }).then((resp) => {
                
                if (resp.status === 200 && resp.data.user === "created_success"){
                    SetUserStatus({"status":200, "user":"created_success"})
                }
                if (resp.status === 200 && resp.data.user === "occuped"){
                    SetUserStatus({"status":200, "user":"occuped"})
                }
                else{
                    SetUserStatus({"status":500, "user":"internalError"})
                }
            })
        };
    // OnchangeRegisterInputs    
    const OnChangeRegisterValues = (e) => {
        setRegisterValues({...registerValues,[e.target.name]: e.target.value });
        };
    // Recovery password methods ------------------------------------------------------
    const [recoveryEmail,setRecoveryEmail] = useState({
        email:"",
        });
    const [recoveryEmailStatus, setRecoveryEmailStatus] = useState("")
    const recoveryPasswordSubmmit = (e) => {
        e.preventDefault();
        console.log(recoveryEmail)
        axios.put('http://127.0.0.1:5000/resetPassword', {
            recoveryEmail
          }).then(resp => {
            console.log(resp.data)
            if (resp.status === 200){
                setRecoveryEmailStatus(resp.data)
            }
            else{
                setRecoveryEmailStatus({"status":500,
                "message":"FailSend"})
            }
          })

        
    };
    const onChangeRecoveryPassword = (e) => {
        setRecoveryEmail({...recoveryEmail,[e.target.name]: e.target.value });
    };

    return (
        <AppContext.Provider value={{
            userStatus,
            registerValues,
            setRegisterValues,
            handleRegisterSubmit,
            OnChangeRegisterValues,
            recoveryEmail,
            onChangeRecoveryPassword,
            recoveryPasswordSubmmit,
            recoveryEmailStatus

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}