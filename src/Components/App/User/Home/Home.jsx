
import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"
import turismo from "../../../../Assets/imgs/turismo.jpeg"
import vinos from "../../../../Assets/imgs/vinos.jpg"
import "./Home.scss"
import { MDBIcon } from "mdb-react-ui-kit"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../../../Reducers/UserReducer"

export const Home = () => {
  const user = useSelector(state => state.userReducer)
  const arrProductSelected = [
    {
      active: true,
      brand:{id: 19, brand: 'Vino Toro2'},
      category: {id: 1, category: 'Tinto'},
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      imagesWine:[
         {id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg'}
      ],
      name: "Vino Toro",
      price: 1500,
      stock: 2050,
      brand: {id: 2, brand: 'Cabernet Suavignon'},
      varietal: {id: 2, varietal: 'Cabernet Suavignon'}
    },
    {
      active: true,
      brand:{id: 19, brand: 'Vino Toro2'},
      category: {id: 1, category: 'Tinto'},
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      imagesWine:[
         {id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg'}
      ],
      name: "Vino Toro",
      price: 1500,
      stock: 2050,
      brand: {id: 2, brand: 'Cabernet Suavignon'},
      varietal: {id: 2, varietal: 'Cabernet Suavignon'}
    },
    {
      active: true,
      brand:{id: 19, brand: 'Vino Toro2'},
      category: {id: 1, category: 'Tinto'},
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      imagesWine:[
         {id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg'}
      ],
      name: "Vino Toro",
      price: 1500,
      stock: 2050,
      brand: {id: 2, brand: 'Cabernet Suavignon'},
      varietal: {id: 2, varietal: 'Cabernet Suavignon'}
    },
    {
      active: true,
      brand:{id: 19, brand: 'Vino Toro2'},
      category: {id: 1, category: 'Tinto'},
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      imagesWine:[
         {id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg'}
      ],
      name: "Vino Toro",
      price: 1500,
      stock: 2050,
      brand: {id: 2, brand: 'Cabernet Suavignon'},
      varietal: {id: 2, varietal: 'Cabernet Suavignon'}
    }

  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <div className="ContainerHome">
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
                ?[
                  {text: "Store",icon:"shopping-cart", path:"/store"},
                  {text: "Mis Compras ",icon:"clipboard-check", path:"/store"},
                  {text: "Cerrar Sesion",icon:"sign-in-alt", path:"/login"},
                ].map(({ text, icon, path }, i) => (
                  <li key={i} onClick={()=>{
                    if(text==="Cerrar Sesion"){
                      dispatch(removeUser())
                      localStorage.removeItem("token")
                      navigate(path)
                    }else{
                      navigate(path)
                    } }} >{text}  <MDBIcon fas icon={`${icon}`} /></li>
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
      <Carrousel />
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Ofertas</h2>
        <b></b>
      </div>

      <div className="productSelected">

        {
          arrProductSelected.map((vino, i) => (
            <CardItemList
              key={i}
              type={"wines"}
              vino={vino}
            />
          ))
        }
      </div>
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Servicios</h2>
        <b></b>
      </div>
      <div className="Container__accesories">
        {
          [
            { path: "/storeaccesories", text: "Accesorios", src: "https://www.dulcehogar.mx/wp-content/uploads/2020/04/Accesorios-para-vino-0.jpg" },
            { path: "/vinos", text: "Vinos Premium", src: vinos },
            { path: "/turismo", text: "Turismo", src: turismo }
          ].map(({ text, src, path }) => (
            <div onClick={() => { navigate(path) }} style={{ backgroundImage: `url(${src})` }} className="containerAccesories">
              <h2>{text}</h2>
            </div>
          ))
        }
      </div>
      <Footer />

    </div>
  )
}
