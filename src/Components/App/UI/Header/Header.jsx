

import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit"
import "./Header.scss"
import logo from "../../../../Assets/Vinance.png"
export const Header = () => {
  return (
    <div className="HeaderContainerPrincipal">
      <div className="HeaderContainerPricicpal__containerElements">
        <div className="HeaderContainerPricicpal-containerLogo">
          <img src={`${logo}`}/>
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
                {text: "Login",icon:"sign-in-alt"},
                {text: "Mis Compras",icon:"clipboard-check"},
                {text: "Carrito",icon:"shopping-cart"},
              
              ].map(({text, icon})=>(
                <li>{text}  <MDBIcon fas icon={`${icon}`} /></li>
              ))

              }
           
            </ul>
        </div>
      </div>
    </div>
  )
}
