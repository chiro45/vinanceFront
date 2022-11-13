

import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Header.scss"
import { removeUser } from "../../../../Reducers/UserReducer"

export const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  return (
    <div className="HeaderContainerPrincipal">
      <div className="HeaderContainerPricicpal__containerElements">
        <div onClick={()=>navigate("/homeuser")}  className="HeaderContainerPricicpal-containerLogo">
          <h2 style={{cursor: "pointer", fontSize:"2.4vw", color: "#fff", fontStyle:"italic", margin:"0"}}>Vinance</h2>
          <div>
              <img src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/themes/common/logo-1852450306-1480016030-12b8c3de573751b06e7fa6bd160efeda1512201795-480-0.png?0" alt="Wines Argentina Express" class="logo-img" />
          </div>
         </div>
        <div className="HeaderContainerPricicpal__container-search">
          <div className="HeaderContainerPricicpal__input">
              <input
              placeholder={"Busca un producto"} className="inputSearch" type="text"/>
          </div>
          <div className="containerSearchButton">
            <MDBBtn>Buscar <MDBIcon fas icon="search" /></MDBBtn>
          </div>
          

        </div>
        <div className="HeaderContainerPricicpal__container-itemsUser">
            <ul>
              {
              [
                {text: "Mis Compras ",icon:"clipboard-check", path:"/store"},
                {text: "Carrito ",icon:"shopping-cart", path:"/store"},
                {text: "Cerrar Sesion ",icon:"sign-in-alt", path:"/homeuser"},
              
              ].map(({text, icon, path},i)=>(
                <li key={i} onClick={()=>{
                  if(text==="Cerrar Sesion"){
                    dispatch(removeUser())
                    localStorage.removeItem("token")
                    navigate(path)
                  }else{
                    navigate(path)
                  } }} >{text} <MDBIcon fas icon={`${icon}`} /></li>
              ))

              }
           
            </ul>
        </div>
      </div>
    </div>
  )
}
