

import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit"
import "./Header.scss"

export const Header = () => {
  return (
    <div className="HeaderContainerPrincipal">
      <div className="HeaderContainerPricicpal__containerElements">
        <div className="HeaderContainerPricicpal-containerLogo">
          <h2 style={{fontSize:"2.4vw", color: "#fff", fontStyle:"italic", margin:"0"}}>Vinance</h2>
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
