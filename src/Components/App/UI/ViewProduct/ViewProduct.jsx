import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Slider from "react-slick/lib/slider"
import { addToCart} from "../../../../Actions/Cart"
import { useForm } from "../../../../Hooks/useForm"
import { removeUser } from "../../../../Reducers/UserReducer"

import "./ViewProduct.scss"
export const ViewProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer)
  const vino = useSelector(state => state.productReducer)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <MDBIcon fas icon={`plus`} />,
    nextArrow: <MDBIcon fas icon={`plus`} />,
    adaptiveHeight: false,
  };

  const [formValues, handleInputChange]= useForm({
    cant: 1
  })

  const {cant} = formValues

  const handleAddToCart = ()=>{
    dispatch(addToCart(vino.productActive, parseInt(cant)))
  }
 
  return (
    <div className="containerProductView">
      <div className="inicio__containerHeader">
        <div className="inicioContainer">
          <div className="inicio__ContainerTitle">
            <h2>Vinance</h2>
            <div>
              <img src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/themes/common/logo-1852450306-1480016030-12b8c3de573751b06e7fa6bd160efeda1512201795-480-0.png?0" alt="Wines Argentina Express" class="logo-img" />
            </div>
          </div>
          <div className="HeaderContainerPricicpal__container-itemsUser">
            <ul>
              {
                (user.userName !== null)
                  ? [
                    { text: "Store", icon: "shopping-cart", path: "/store" },
                    { text: "Mis Compras ", icon: "clipboard-check", path: "/store" },
                    { text: "Cerrar Sesion", icon: "sign-in-alt", path: "/login" },
                  ].map(({ text, icon, path }, i) => (
                    <li key={i} onClick={() => {
                      if (text === "Cerrar Sesion") {
                        dispatch(removeUser())
                        localStorage.removeItem("token")
                        navigate(path)
                      } else {
                        navigate(path)
                      }
                    }} >{text}  <MDBIcon fas icon={`${icon}`} /></li>
                  ))
                  : [
                    { text: "Tienda", icon: "shopping-cart", path: "/store" },
                    { text: "Ingresar", icon: "sign-in-alt", path: "/login" },
                    { text: "Registrarse", icon: "clipboard-check", path: "/register" },

                  ].map(({ text, icon, path }, i) => (
                    <li key={i} onClick={() => navigate(path)}>{text}  <MDBIcon fas icon={`${icon}`} /></li>
                  ))

              }
            </ul>
          </div>
        </div>
      </div>
      <div className="carrouselItems">
        <div className="Containercarrousel">
          <Slider {...settings}>
            {
              vino.productActive.imagesWine.map((el, i) => (
                <img className="img" src={el.image} />

              ))
            }
          </Slider>
        </div>


        <div className="containerPropsProduct">
          <div className="containerPropProduct__title">
            <h1 > {vino.productActive.name}</h1>
          </div>
          <div className="containerPropProduct__h4">
            <h4>Marca: {vino.productActive.brand.brand}</h4>
          </div>
          <div className="containerPropProduct__h4">
            <h4>Categoria: {vino.productActive.category.category}</h4>
          </div>
          <div className="containerPropProduct__h4">
            <h4>Varietal: {vino.productActive.varietal.varietal}</h4>
          </div>
          <div className="containerPropProduct__h4">
            <h4>Precio: ${vino.productActive.price}</h4>
          </div>
          <div className="containerPropProduct__h4">
            <h4>Cantidad: {vino.productActive.stock}</h4>
          </div>
          <div className="containerCompra">
            <div className="containerCompraInput">
              <input type={"number"} value={cant} name="cant" onChange={handleInputChange} placeholder="cantidad" min="1" />
            </div>
            <div>
              <MDBBtn onClick={handleAddToCart}>Añadir al carrito <MDBIcon fas icon="cart-plus" /></MDBBtn>
            </div>
          </div>
          <div className="containerDescription">
            <p>Descripcion: <br/> {vino.productActive.description}</p>
          </div>


        </div>

      </div>
    </div>
  )
}
