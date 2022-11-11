import { MDBBtn } from "mdb-react-ui-kit"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addActiveProduct, removeActiveProduct } from "../../../../Actions/Product"
import "./CardItemList.scss"

export const CardItemList = ({vino, index}) => {
    const { varietal, name, price, src, discount } =  vino
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const handleClickProduct = () => {
        navigate('/product')
        dispatch(addActiveProduct(vino))
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
                    discount !== undefined
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
