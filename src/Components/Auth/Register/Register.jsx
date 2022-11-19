
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { validateEmail } from "../../../Helpers/HelpersFuntions"
import { useForm } from "../../../Hooks/useForm"
import "./Register.scss"
export const Register = () => {

  const navigate = useNavigate()


  const [formValues, handleInputChange] = useForm({
    user: "",
    password: "",
    passwordConfirm: "",
    date: undefined,
    email: "",
    name: ""
  })
  const {
    user,
    name,
    password,
    passwordConfirm,
    email = "",
  } = formValues

  const onRegister = () => {
    

    if( email.length < 2 || validateEmail(email) !== true){
      return  Swal.fire("Error!", "Email Incorrecto!", "error")
    }
    else if( user.length < 4 || name.length < 4){
      return  Swal.fire("Error!", "Usuario o nombre incorrecto!", "error")
    }
    else if (password !== passwordConfirm){
       return Swal.fire("Error!", "Contraseñas no coinciden", "error")
     }else{
      fetch(`${process.env.REACT_APP_URLBASE}auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          name: name,
          email: email,
          password: password,
  
        })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Usuario guardado") {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'se ha regsitrado con exito!',
              showConfirmButton: false,
              timer: 1000
            })
            navigate("/login")
          } else {
            Swal.fire("Error!", "Usuario ya existente", "error")
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Error!", "Hubo un error intenta nuevamente", "error")
        });
     
     }
     
      


  }

  return (
    <div className="containerPrincipal">
      <div className="filter">
        <div className="containerPrincipal__login">
          <div className="containerPrincipal__items">
            <div className="containerLogin__title">
              <h1> Vinance </h1>
            </div>
            <div>
              <label className="labelRegister">Ingrese un nombre de usuario</label>
              <input
                className="inputRegister"
                onChange={handleInputChange}
                name={"user"}
                value={user}
                type={"text"} />
            </div>
            <div>
              <label className="labelRegister">Nombre</label>
              <input
                className="inputRegister"
                onChange={handleInputChange}
                name={"name"}
                value={name}
                type={"text"} />
            </div>
            <div>
              <label className="labelRegister">Email</label>
              <input
                className="inputRegister"
                onChange={handleInputChange}
                name={"email"}
                value={email}
                type={"email"} />
            </div>
            <div>
              <label className="labelRegister">Ingrese una contraseña</label>
              <input
                className="inputRegister"
                onChange={handleInputChange}
                name={"password"}
                value={password}
                type={"text"} />
            </div>
            <div>
              <label className="labelRegister">Repita la contraseña</label>
              <input
                className="inputRegister"
                onChange={handleInputChange}
                name={"passwordConfirm"}
                value={passwordConfirm}
                type={"text"} />
            </div>
           
            <div className="container__itemsLogin-buttonIngresar">
              <MDBBtn onClick={onRegister}>Registrarse</MDBBtn>
            </div>
            <div className="container__itemsLogin-linKregister mt-1">
              <a onClick={()=>{navigate("/login")}}> <MDBIcon fas icon="arrow-left" /> Volver a Login </a>
            </div>
          </div>
          <div style={{ backgroundImage: `url(https://www.zdwines.com/system/uploads/fae/image/asset/309/zd_wines_vertical_offering_napa_valley_cabernet_sauvignon.jpg)` }} className="divImgLogin"></div>

        </div>
      </div>
    </div>
  )
}
