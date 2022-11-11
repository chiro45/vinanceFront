import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addActiveProduct, removeActiveProduct } from "../../../../Actions/Product"
import "./CardItemList.scss"

export const CardItemList = ({vino, index, userMode}) => {
    const user = useSelector(state => state.userReducer)
    const { varietal, name, price, imagesWine, discount ,active} =  vino
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const handleClickProduct = () => {
        navigate('/product')
        dispatch(addActiveProduct(vino))
    }
    const handleClickAddCarrito = () => {

    }

    return (
        <div className={"ContainerCardItemList" }>
            {
                userMode ==="seller"
                ?<div className="CardContainerItemList__buttonEdit">
                    <MDBBtn onClick={handleClickAddCarrito}><MDBIcon fas icon="pen" /></MDBBtn>
                </div>
                : null
            }
            <div onClick={handleClickProduct}>
                <div className="ContainerCardItemList__img">
                    <img src={imagesWine[0].image} /></div>
                <div className="CardContainerItemList__Varietal"><p>{varietal.varietal}</p></div>
                <div className="CardContainerItemList__Nombre"><p>{name}</p></div>
                {
                    discount !== undefined
                        ? <div className="CardContainerItemList__precio"><p className="tachado">${price}</p></div>
                        : null
                }

                <div className="CardContainerItemList__precio"><p>${price}</p></div>
            </div>
           {
            userMode !=="seller"
           ? <div className="CardContainerItemList__button">
             <MDBBtn onClick={handleClickAddCarrito}>Añadir al carrito</MDBBtn>
            </div>
            :null
           }
        </div>

    )
}
