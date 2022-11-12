import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../../../Actions/Cart"
import { addActiveProduct, removeActiveProduct } from "../../../../Actions/Product"
import { ModalModify } from "../Modals/ModalModify/ModalModify"
import "./CardItemList.scss"

export const CardItemList = ({ vino, index, userMode, type }) => {
    const user = useSelector(state => state.userReducer)
    const { varietal, name, price, imagesWine, discount, active } = vino
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickProduct = () => {
        dispatch(addActiveProduct(vino))
        navigate('/product')
    }
    const handleClickAddCarrito = () => {
        dispatch(addToCart(vino))
    }
    const [openModal, setOpenModal] = useState(false)
    const handleModify = () => {
        dispatch(removeActiveProduct())
        dispatch(addActiveProduct(vino))
        setOpenModal(!openModal)
    }
    return (
        <div className={"ContainerCardItemList"}>
            {
            (type === "wines")
            ? 
                <>
                 <ModalModify
                     type={"wines"}
                     vino={vino}
                     openModal={openModal}
                     handleOpenModal={handleModify}
                 />
                 {
                    (userMode === "seller")
                        ? <div className="CardContainerItemList__buttonEdit">
                            <MDBBtn onClick={handleModify}><MDBIcon fas icon="pen" /></MDBBtn>
                        </div>
                        : null
                }
                <div onClick={handleClickProduct}>
                    <div className="ContainerCardItemList__img">
                        <img src={imagesWine[0] !== undefined ? imagesWine[0].image : "https://img.freepik.com/foto-gratis/botella-vino-tinto-uvas_23-2148232185.jpg?w=2000"} /></div>
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
                    userMode !== "seller"
                        ? <div className="CardContainerItemList__button">
                            <MDBBtn onClick={handleClickAddCarrito}>Añadir al carrito</MDBBtn>
                        </div>
                        : null
            }
                </>
            
            : 
            <>
                 <ModalModify
                     type={"accessories"}
                     vino={vino}
                     openModal={openModal}
                     handleOpenModal={handleModify}
                 />
                 {
                    (userMode === "seller")
                        ? <div className="CardContainerItemList__buttonEdit">
                            <MDBBtn onClick={handleModify}><MDBIcon fas icon="pen" /></MDBBtn>
                        </div>
                        : null
                }
                <div onClick={handleClickProduct}>
                    <div className="ContainerCardItemList__img">
                        <img src={vino.imagesAccesory[0] !== undefined ? vino.imagesAccesory[0].image : "https://img.freepik.com/foto-gratis/botella-vino-tinto-uvas_23-2148232185.jpg?w=2000"} /></div>
                    <div className="CardContainerItemList__Nombre mt-2"><p>{name}</p></div>        
                    <div className="CardContainerItemList__precio"><p>${price}</p></div>
                </div>
                {
                    userMode !== "seller"
                        ? <div className="CardContainerItemList__button">
                            <MDBBtn onClick={handleClickAddCarrito}>Añadir al carrito</MDBBtn>
                        </div>
                        : null
            }
                </>
         }

        </div>
    )
}
