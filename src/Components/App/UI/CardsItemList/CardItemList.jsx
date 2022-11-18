import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { addToCart } from "../../../../Actions/Cart"
import { addActiveProduct, removeActiveProduct } from "../../../../Actions/Product"
import { ModalModify } from "../Modals/ModalModify/ModalModify"
import "./CardItemList.scss"

export const CardItemList = ({ vino, userMode, type, getAllWInes  }) => {
    const user = useSelector(state => state.userReducer)
    const { varietal, name, price,discount } = vino
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickProduct = () => {

        dispatch(addActiveProduct(vino))
        navigate('/product')
    }
    const handleClickAddCarrito = () => {
        if (user.userName !== null) {
            dispatch(addToCart(vino))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto Añadido al carrito!',
                showConfirmButton: false,
                timer: 800
            })

        } else {
            Swal.fire("Error", "Debes Iniciar Sesión!", "error")

        }
    }
    const [openModal, setOpenModal] = useState(false)
    const handleModify = () => {
        dispatch(removeActiveProduct())
        dispatch(addActiveProduct(vino))
        setOpenModal(!openModal)
    }
    return (
        <div className={"ContainerCardItemList"}>
            <div>
                <ModalModify
                    getAllWInes={getAllWInes }
                    type={vino.type}
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
                <div className={vino.active ===true ? "" : "disabled"} onClick={handleClickProduct}>
                    <div className="ContainerCardItemList__img">
                        <img src={vino.images[0] !== undefined ? vino.images[0].image : "https://img.freepik.com/foto-gratis/botella-vino-tinto-uvas_23-2148232185.jpg?w=2000"} />
                    </div>
                    {
                        type === "Wines"
                            ? <div className="CardContainerItemList__Varietal"><p>{varietal.varietal}</p></div>
                            : null
                    }
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
            </div>
        </div>


    )
}
