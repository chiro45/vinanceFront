import { MDBIcon } from "mdb-react-ui-kit"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { removeUser } from "../../../../Reducers/UserReducer"


export const HeaderHome = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.userReducer)
  return (
    <div className="inicio__containerHeader">
        <div className="inicioContainer">
          <div className="inicio__ContainerTitle" onClick={()=>navigate("/homeuser")}>
            <h2>Vinance</h2>
            <div>
              <img src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/themes/common/logo-1852450306-1480016030-12b8c3de573751b06e7fa6bd160efeda1512201795-480-0.png?0" alt="Wines Argentina Express" className="logo-img" />
            </div>
          </div>
          <div className="HeaderContainerPricicpal__container-itemsUser">
            <ul>
              {
               (user.userName !== null)
                ?[
                  {text: "Store",icon:"shopping-cart", path:"/store"},
                  {text: "Mis Compras",icon:"clipboard-check", path:"/store"},
                  {text: "Cerrar Sesion",icon:"sign-in-alt", path:"/login"},
                ].map(({ text, icon, path }, i) => (
                  <li key={i} onClick={()=>{
                    if(text==="Cerrar Sesion"){
                      dispatch(removeUser())
                      localStorage.removeItem("token")
                      navigate(path)
                    }else if(text ==="Mis Compras"){
                      Swal.fire("Próximamente!", "Estamos trabajando en ello.", "warning")
                      
                    }else{
                      navigate(path)
                    } }} >{text}  <MDBIcon fas icon={`${icon}`} /></li>
                ))
                : [
                  { text: "Tienda", icon: "shopping-cart", path: "/store" },
                  { text: "Ingresar", icon: "sign-in-alt", path: "/login" },
                  { text: "Registrarse", icon: "clipboard-check", path: "/register" },

                ].map(({ text, icon, path }, i) => (
                  <li key={i} onClick={() => navigate(path)}>{text}  <MDBIcon fas icon={`${icon}`} /></li>
                ))
                
              }
            </ul>
          </div>
        </div>
      </div>
  )
}
