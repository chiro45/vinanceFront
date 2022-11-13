
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import "./Login.scss"
import img from "../../../Assets/imgs/imgLogin.jpeg"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../../Hooks/useForm"

import {useState} from "react"
import { useDispatch } from "react-redux"
import { handleAddUser } from "../../../Reducers/UserReducer"

export const Login = () => {

  const [formValues, handleInputChange] = useForm({
    user: "",
    password: "",
    showPass: false
  })
  const {
    user,
    password,
    showPass
  } = formValues

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = () => {

    fetch(`${process.env.REACT_APP_URLBASE}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: password,
      })
    })
      .then((response) => response.json())
      .then((data) => {
       if(data.username){
        console.log(data)
         dispatch(handleAddUser(data.username,data.authorities))
         localStorage.removeItem("token")
        setTimeout(()=>{
         localStorage.setItem("token", data.token)
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Haz Iniciado sesión correctamente!',
          showConfirmButton: false,
          timer: 800
        })
         navigate("/homeuser")
        },50)
       }
      }
      )
      .catch((err) => {
        console.log(err);
        Swal.fire("Intenta Nuevamente","Usuario o contraseña incorrecta","error")
      });
    
 
    
  }

  return (
    <div className="containerPrincipal">
      <div className="filter">
        <div className="containerPrincipal__login">
          <div className="containerPrincipal__items">
            <div className="containerLogin__title">
              <h1>Vinance</h1>
            </div>
            <div className="container__itemsLogin-user">
              <label className="label__Login">Usuario</label>
              <input 
                name="user" 
                value={user} 
                onChange={handleInputChange} 
                type={"text"} 
                autoComplete="off" 
                spellCheck="false" 
                className="input__login" />
            </div>
            <div className="container__itemsLogin-passwd">
              <label className="label__Login">Contraseña</label>
              <input 
              name="password" 
              value={password} 
              onChange={handleInputChange} 
              type={showPass ? "text": "password"} 
              className="input__login" />
            </div>
            <div className="divCheckbox">
              <label>Mostrar Contraseña</label>
              <input 
              onChange={handleInputChange}  
              name="showPass" 
              value={showPass} 
              type={"checkbox"} />
            </div>
            <div className="container__itemsLogin-linKregister ">
              <a onClick={()=>{navigate("/register")}}>Registrarse <MDBIcon fas icon="user-plus" /></a>
            </div>
            <div className="container__itemsLogin-linKregister ">
              <a onClick={()=>{navigate("/homeuser")}}> <MDBIcon fas icon="arrow-left" /> Volver a Inicio </a>
            </div>

            <div className="container__itemsLogin-buttonIngresar">
              <MDBBtn onClick={onLogin}>Ingresar</MDBBtn>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${img})` }} className="divImgLogin"></div>

        </div>
      </div>
    </div>
  )
}
