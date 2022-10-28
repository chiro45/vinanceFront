
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import "./Login.scss"
import img from "../../../Assets/imgs/imgLogin.jpeg"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
export const Login = () => {

  const navigate = useNavigate()

  const onLogin = ()=>{
    Swal.fire("Login exitoso "," haz ingresado correctamente","success")
    navigate("/homeuser")
  }
  return (
    <div className="containerPrincipal">
      <div className="filter">
        <div className="containerPrincipal__login">
          <div className="containerPrincipal__items">
            <div className="containerLogin__title">
              <h1> Vinance </h1>
            </div>
            <div className="container__itemsLogin-user">
              <label className="label__Login">Usuario</label>
              <input type={"text"} autoComplete="off" spellcheck="false" className="input__login" />
            </div>
            <div className="container__itemsLogin-passwd">
              <label className="label__Login">Contraseña</label>
              <input type={"password"} className="input__login" />
            </div>
            <div className="divCheckbox">
              <label>Mostrar Contraseña</label>
              <input type={"checkbox"} />
            </div>
            <div className="container__itemsLogin-linKregister">
              <a>Registrarse <MDBIcon fas icon="user-plus" /></a>
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
