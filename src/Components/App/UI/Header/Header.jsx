

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
              <li>User <MDBIcon far icon="user-circle" /></li>
              <li>Mis Compras <MDBIcon fas icon="clipboard-check" /></li>
              <li>Carrito <MDBIcon fas icon="shopping-cart" /></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
