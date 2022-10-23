import { MDBBtn } from "mdb-react-ui-kit"
import "./CardItemList.scss"

export const CardItemList = ({ id, varietal, index, name, price, src, discount = null, navigate }) => {

    const handleClickProduct = () => {
        navigate('/product')
       
    }
    const handleClickAddCarrito = () => {
        
    }

    return (
        <div className="ContainerCardItemList">
            <div onClick={handleClickProduct}>
                <div className="ContainerCardItemList__img">
                    <img src={src} /></div>
                <div className="CardContainerItemList__Varietal"><p>{varietal}</p></div>
                <div className="CardContainerItemList__Nombre"><p>{name}</p></div>
                {
                    discount !== null
                        ? <div className="CardContainerItemList__precio"><p className="tachado">${price}</p></div>
                        : null
                }

                <div className="CardContainerItemList__precio"><p>${price}</p></div>
            </div>
            <div className="CardContainerItemList__button">
                <MDBBtn onClick={handleClickAddCarrito}>Añadir al carrito</MDBBtn>
            </div>
        </div>

    )
}
