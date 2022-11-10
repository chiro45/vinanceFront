
import { MDBBtn } from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useForm } from "../../../Hooks/useForm"
import "./Register.scss"
export const Register = () => {

  const navigate = useNavigate()

  
  const [formValues, handleInputChange] = useForm({
    user:"",
    password:"",
    passwordConfirm:"",
    date: undefined,
    address: ""
  })
  const {
  user,
  password,
  passwordConfirm,
  date,
  address
  } = formValues

  const onRegister = ()=>{
    //  fetch("", {
    //    method: "POST",
    //    headers: {
    //      Accept: "application/json, text/plain, */*",
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({
    //     user:user,
    //     password:password,
    //     passwordConfirm:passwordConfirm,
    //     date: date,
    //     address: address
    //    })
    //  })
    //    .then((response) => response.json())
    //    .then((data) => console.log(data))
    //    .catch((err) => {
    //      console.log(err);
    //    });
     
 
  //   Swal.fire("Registrado!","se ha regsitrado con exito", "success")
  //   navigate("/login")
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
              type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Ingrese una contraseña</label>
              <input 
              className="inputRegister"
              onChange={handleInputChange}
              name={"password"} 
              value={password}
              type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Repita la contraseña</label>
              <input
              className="inputRegister"
              onChange={handleInputChange}
              name={"passwordConfirm"} 
              value={passwordConfirm}
              type={"text"}/>
            </div>
            <div>
              <label className="labelRegister">Fecha de nacimiento</label>
              <input 
              onChange={handleInputChange}
              name={"date"} 
              value={date} 
              className="inputRegister date" type={"date"}/>
            </div>
            <div>
              <label className="labelRegister">Domicilio</label>
              <input
              className="inputRegister"
              onChange={handleInputChange}
              name={"address"} 
              value={address}
              type={"text"}/>
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
