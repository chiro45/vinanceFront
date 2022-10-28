
import { MDBBtn } from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import "./Register.scss"
export const Register = () => {

  const navigate = useNavigate()

  const onRegister = ()=>{
    Swal.fire("Registrado!","se ha regsitrado con exito", "success")
    navigate("/login")
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
              <input className="inputRegister" type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Ingrese una contraseña</label>
              <input className="inputRegister" type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Repita la contraseña</label>
              <input className="inputRegister" type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Fecha de nacimiento</label>
              <input className="inputRegister date" type={"date"}/>
            </div>
            <div>
              <label className="labelRegister">Domicilio</label>
              <input className="inputRegister" type={"text"}/>
            </div>
            

            <div className="container__itemsLogin-buttonIngresar">
              <MDBBtn onClick={onRegister}>Registrarse</MDBBtn>
            </div>
          </div>
          <div style={{ backgroundImage: `url(https://www.zdwines.com/system/uploads/fae/image/asset/309/zd_wines_vertical_offering_napa_valley_cabernet_sauvignon.jpg)` }} className="divImgLogin"></div>

        </div>
      </div>
    </div>
  )
}
