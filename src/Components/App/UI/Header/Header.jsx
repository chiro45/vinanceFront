

import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit"
import "./Header.scss"

export const Header = () => {
  return (
    <div className="HeaderContainerPrincipal">
      <div className="HeaderContainerPricicpal__containerElements">
        <div className="HeaderContainerPricicpal-containerLogo">
          <h2 style={{fontSize:"2.4vw", color: "#fff", fontStyle:"italic", margin:"0"}}>Vinance</h2>
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
